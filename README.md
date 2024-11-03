### Faraja Bien - Portfolio Site

#### Overview

**URL**: [fbien.com](https://fbien.com/)
**Description**: A streamlined, database-free web application showcasing Faraja Bien’s technical services, success stories, and a well-defined process for startup validation and development.

---

#### Key Components & Features

1. **Site Structure**:

   - **Static Pages**:
     - **`app/about`**: Details on the mission and background of Faraja Bien.
     - **`app/services`**: Lists all services offered, including packages for startup validation, MVP development, technical growth, and ongoing CTO support.
     - **`app/resources`**: Provides access to a library of guides, templates, and useful resources for startups.
   - **Dynamic Pages**:
     - **`app/services/service`**: Dedicated pages for each service, detailing scope, deliverables, and pricing.
     - **`app/resources/resource`**: Individual pages for each resource, easily accessible without database dependencies.
     - **`app/projects`**: Highlights successful projects with real-world results.

2. **Technical Stack**:

   - **Next.js 14**: Leveraged for fast routing, seamless page rendering, and API routes.
   - **JSON Data**: Stored in `public/files` to eliminate the need for a database, simplifying deployment and maintenance while ensuring a responsive user experience.
   - **Static Content Management**: All content is managed using JSON files, making it easy to update and maintain without additional backend infrastructure.

3. **Landing Page Copy**:

   - Clear and concise messaging emphasizes Faraja Bien’s role as a technical co-founder for East African startups.
   - Calls to action guide users through the startup journey, from ideation and validation to MVP development and technical growth.
   - Testimonials and case studies showcase proven success, building trust with potential clients.

4. **Process-Oriented Content**:

   - **Validation Framework**: Educates users on the importance of problem and solution validation, encouraging a systematic approach to startup development.
   - **Service Packages**: Provides a clear breakdown of available services, including benefits, deliverables, and timelines, making it easy for potential clients to select the right path for their needs.

5. **User-Friendly Design**:

   - **Navigation**: Simple and intuitive, helping users quickly find relevant sections.
   - **Responsive Layout**: Optimized for mobile and desktop, ensuring accessibility across devices.
   - **Conversion-Oriented**: Multiple CTAs, such as “Start Your Project” and “Book Free Discovery Call,” guiding users toward engaging with Faraja Bien.

6. **Tech-Savvy and Lean**:
   - Built without a database to optimize performance and security.
   - JSON files provide the flexibility to easily manage content updates.
   - Efficient, clean design prioritizes speed, readability, and simplicity.

---

#### Skills Demonstrated

- **Front-End Development**: Expertise in creating fast-loading, responsive interfaces with Next.js.
- **Static Content Management**: Managed static content without a database by organizing JSON files in `public/files`.
- **Process-Driven Design**: Tailored content and UX to align with a clear startup validation and MVP development framework.
- **Conversion-Focused Copywriting**: Developed landing page copy to effectively communicate value and drive conversions.

#### Sample Code

_Example of JSON file structure used to manage service data_:

```json
[
	{
		"id": "startup-validation-sprint",
		"title": "Startup Validation Sprint",
		"price": "25,000 KSH",
		"description": "A two-week sprint to validate your startup idea...",
		"weeks": 2,
		"features": ["Strategy & Planning", "Implementation"]
	}
]
```

This project demonstrates a strong understanding of static web applications, user experience design, and a focused approach to building professional portfolio sites with Next.js.
