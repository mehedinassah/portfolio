package com.mehedi.portfolio.controller;

import com.mehedi.portfolio.dto.ApiResponse;
import com.mehedi.portfolio.dto.ContactRequest;
import com.mehedi.portfolio.model.ContactMessage;
import com.mehedi.portfolio.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = {"http://localhost:3000", "https://mehedi-portfolio.vercel.app"})
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<ContactMessage>> sendMessage(
            @Valid @RequestBody ContactRequest request) {
        ContactMessage saved = contactService.saveMessage(request);
        return ResponseEntity.ok(
            ApiResponse.success("Message sent successfully! I'll get back to you soon.", saved)
        );
    }
}
