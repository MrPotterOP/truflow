import { NextResponse } from "next/server";
import { z } from "zod";
import { RateLimiterMemory } from "rate-limiter-flexible";


const formSchema = z.object({
  firstName: z.string().min(2, "Name is too short").max(50, "Name is too long"),
  lastName: z.string().min(2, "Name is too short").max(50, "Name is too long"),
  email: z.string().email("Invalid email address").max(300, "Email is too long"),
  number: z.string().min(10, "Phone number is too short").max(20, "Phone number is too long"),
  company: z.string().min(2, "Company name is too short").max(100, "Company name is too long"),
  designation: z.string().min(2, "Designation is too short").max(100, "Designation is too long"),
  source: z.string(),
  campaign: z.string(),
  medium: z.string(),
  country: z.string(),
});

// Initialize rate limiter: 10 requests per minute per IP
const rateLimiter = new RateLimiterMemory({
  points: 4, // 10 requests
  duration: 60, 
});

export async function POST(request) {
  try {
    // Get client IP for rate limiting (adjust based on your hosting provider)
    const clientIp = request.headers.get("x-forwarded-for") || "unknown";

    // Apply rate limiting
    await rateLimiter.consume(clientIp).catch(() => {
      throw new Error("Too many requests, please try again later");
    });

    // Parse and validate form data
    const body = await request.json();
    console.log(body, "body");
    const validatedData = formSchema.parse(body);

    console.log(validatedData, "validatedData");

    // Send data to Freshsales API
    const response = await fetch(`https://${process.env.FRESHSALES_DOMAIN}/api/contacts`, {
      method: "POST",
      headers: {
        Authorization: `Token token=${process.env.FRESHSALES_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contact: {
          first_name: validatedData.firstName,
          last_name: validatedData.lastName,
          email: validatedData.email,
          mobile_number: validatedData.number,
          job_title: validatedData.designation,
          country: validatedData.country,
          custom_field: {
            "cf_company_name": validatedData.company,
          },
          last_source: validatedData.source,
          last_campaign: validatedData.campaign,
          last_medium: validatedData.medium
        }
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);
      throw new Error(errorData.message || "Process Failed! Please try again later.");
    }

    return NextResponse.json({ message: "Form submitted successfully" }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.errors },
        { status: 400 }
      );
    }

    // Handle other errors
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function OPTIONS() {
  // Handle CORS preflight requests
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}