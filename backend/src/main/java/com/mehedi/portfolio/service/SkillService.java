package com.mehedi.portfolio.service;

import com.mehedi.portfolio.model.Skill;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class SkillService {

    public List<Skill> getAllSkills() {
        return Arrays.asList(
            // Programming Languages
            new Skill(1L, "Java", "Languages", 90, "java"),
            new Skill(2L, "Kotlin", "Languages", 85, "kotlin"),
            new Skill(3L, "JavaScript", "Languages", 80, "javascript"),
            new Skill(4L, "Python", "Languages", 70, "python"),
            new Skill(5L, "TypeScript", "Languages", 72, "typescript"),

            // Frameworks
            new Skill(6L, "Spring Boot", "Frameworks", 88, "spring"),
            new Skill(7L, "React", "Frameworks", 82, "react"),
            new Skill(8L, "Next.js", "Frameworks", 75, "nextjs"),
            new Skill(9L, "Android SDK", "Frameworks", 87, "android"),

            // Tools & Platforms
            new Skill(10L, "Git & GitHub", "Tools", 90, "git"),
            new Skill(11L, "Android Studio", "Tools", 88, "androidstudio"),
            new Skill(12L, "VS Code", "Tools", 92, "vscode"),
            new Skill(13L, "Vercel", "Tools", 80, "vercel"),
            new Skill(14L, "Firebase", "Tools", 78, "firebase"),
            new Skill(15L, "Docker", "Tools", 65, "docker")
        );
    }
}
