package com.mehedi.portfolio.service;

import com.mehedi.portfolio.model.Project;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class ProjectService {

    public List<Project> getAllProjects() {
        return Arrays.asList(
            new Project(
                1L,
                "AI Website Builder",
                "An AI-powered tool that generates complete, production-ready websites from simple text prompts. Integrates with OpenAI and Gemini APIs to produce responsive HTML/CSS/JS code instantly.",
                Arrays.asList("React", "Next.js", "OpenAI API", "Tailwind CSS", "Node.js"),
                "https://github.com/mehedihassan",
                "https://ai-website-builder.vercel.app",
                "/images/ai-builder.png",
                "Web"
            ),
            new Project(
                2L,
                "Currency Converter Android App",
                "A clean, fast Android application built with Kotlin that converts Bangladeshi Taka into 30+ global currencies in real-time using live exchange rate APIs.",
                Arrays.asList("Kotlin", "Android", "Retrofit", "REST API", "Material UI"),
                "https://github.com/mehedihassan",
                null,
                "/images/currency-converter.png",
                "Android"
            ),
            new Project(
                3L,
                "University eSIM App",
                "An Android application enabling international travelers to browse, purchase, and manage eSIM data plans across 190+ countries. Features secure payment integration and real-time plan management.",
                Arrays.asList("Kotlin", "Android", "Firebase", "Stripe API", "MVVM"),
                "https://github.com/mehedihassan",
                null,
                "/images/esim-app.png",
                "Android"
            ),
            new Project(
                4L,
                "Personal Portfolio Website",
                "This very portfolio — a full-stack web application built with React and Spring Boot. Features a REST API backend, contact form, dark theme, and smooth animations.",
                Arrays.asList("React", "Spring Boot", "Java", "Tailwind CSS", "REST API"),
                "https://github.com/mehedihassan",
                "https://mehedi.dev",
                "/images/portfolio.png",
                "Web"
            )
        );
    }

    public Project getProjectById(Long id) {
        return getAllProjects().stream()
            .filter(p -> p.getId().equals(id))
            .findFirst()
            .orElse(null);
    }
}
