# FarajaBien Template Marketplace

![FarajaBien Logo](public/logo.png)

## Overview

FarajaBien is a Next.js-based marketplace offering exclusive, customizable templates for African service providers. It features built-in paywall functionalities integrated with PayStack for reliable local payment processing. Whether you're selling digital goods, documentation, or other services, FarajaBien provides a robust solution to monetize your offerings effectively.

## Features

- Exclusive, professionally designed templates
- Integrated paywall system
- PayStack integration for localized payments
- Subscription support for updates and newsletters
- Image uploads with Cloudinary integration
- User-friendly forms for business landing pages
- Dynamic routing based on unique slugs
- Optional authentication for secure routes

## Getting Started

### Prerequisites

- Node.js
- PayStack account
- Cloudinary account (optional)
- GitHub account

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/faraja-bien.git
   cd faraja-bien
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables in `.env.local`:
   ```env
   PAYSTACK_SECRET_KEY=your_paystack_secret_key
   PAYSTACK_PUBLIC_KEY=your_paystack_public_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

## Usage

### Creating a Business Landing Page

1. Navigate to the create business page.
2. Fill out the form with your business details.
3. Upload an image (optional).
4. Submit the form to create your landing page.

For the implementation details, refer to:

```typescript:app/business/components/CreateBusiness.tsx

```

### Accessing Premium Templates

1. Navigate to the premium section of a business page.
2. If not paid, you'll see a payment prompt.
3. Complete the payment via PayStack.
4. Access the premium content or template.

For the premium page implementation, see:

```typescript:app/business/[slug]/premium/page.tsx

```

### Subscribing to Business Updates

On each business's page, users can subscribe with their email to receive updates or newsletters.

## API Routes

### Create Business

- **Endpoint:** `/api/create-business`
- **Method:** POST
- **Request Body:** name, description, email, image (optional)
- **Response:** slug (unique identifier for the business)

For implementation details:

### Confirm Business

- **Endpoint:** `/api/confirm-business`
- **Method:** GET
- **Query Parameters:** slug
- **Response:** Confirmation message or error

## Payment Integration with PayStack

FarajaBien uses PayStack for seamless transactions tailored for African markets.

1. Users initiate payment via the PayStack gateway.
2. PayStack sends a verification request to our server.
3. Upon successful verification, user access is updated.

Ensure you've set up the PayStack API keys in your environment variables.

## Deployment

Deploy your FarajaBien marketplace using platforms like Vercel or Heroku. Follow their respective documentation for deploying Next.js applications.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your features or fixes.

## License

This project is licensed under the MIT License.

## Support

For inquiries or support, please contact [faraja.bien@gmail.com](mailto:faraja.bien@gmail.com).

===========================================  
The codebase represents a Next.js application for creating and managing business landing pages. Here's an overview of the main components and how to navigate the site:
Home Page (app/page.tsx):
This is the main landing page for the application.
It showcases the developer's profile, tech stack, and recent projects.
Users can navigate to other parts of the site from here.
Business Creation:
Users can create a new business landing page by navigating to /business/create.
The creation process is handled by the CreateBusiness component (app/business/\_components/CreateBusiness.tsx).
After creation, users are redirected to their new business page.
Business Page:
Each business has its own page at /business/[slug].
The business page displays the business name, description, and image.
It includes a subscription form for visitors to sign up.
Premium Content:
Businesses can have premium content accessible at /business/[slug]/premium.
Users need to pay to access this content.
Authentication:
There's a sign-in page at /auth/signin for user authentication.
API Routes:
/api/create-business: Handles business creation.
/api/confirm-business: Confirms and publishes a business.
/api/payment/verify: Verifies payments for premium content.
To navigate the site:
Start at the home page (/).
To create a business, go to /business/create.
After creation, you'll be redirected to your business page (/business/[slug]).
To access premium content, go to /business/[slug]/premium.
Use the sign-in page (/auth/signin) for authentication.
The codebase uses a mix of server and client components. Client components (marked with 'use client') handle interactive elements like forms and state management. Server components handle data fetching and initial rendering.
Key components:
SubscriptionForm: Handles email subscriptions for businesses.
CreateBusiness: Manages the business creation process.
BusinessPage: Displays individual business pages.
PremiumPage: Handles premium content access.
The application uses Next.js 13+ features, including the new app directory structure and API routes.
