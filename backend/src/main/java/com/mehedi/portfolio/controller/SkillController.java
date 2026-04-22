package com.mehedi.portfolio.controller;

import com.mehedi.portfolio.dto.ApiResponse;
import com.mehedi.portfolio.model.Skill;
import com.mehedi.portfolio.service.SkillService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/skills")
@CrossOrigin(origins = {"http://localhost:3000", "https://mehedi-portfolio.vercel.app"})
public class SkillController {

    private final SkillService skillService;

    public SkillController(SkillService skillService) {
        this.skillService = skillService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<Skill>>> getAllSkills() {
        List<Skill> skills = skillService.getAllSkills();
        return ResponseEntity.ok(ApiResponse.success("Skills fetched successfully", skills));
    }
}
