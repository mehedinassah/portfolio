package com.mehedi.portfolio.service;

import com.mehedi.portfolio.dto.ContactRequest;
import com.mehedi.portfolio.model.ContactMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class ContactService {

    private static final Logger logger = LoggerFactory.getLogger(ContactService.class);
    private final List<ContactMessage> messages = new ArrayList<>();
    private final AtomicLong idCounter = new AtomicLong(1);
    private final JavaMailSender mailSender;

    @Value("${portfolio.email.to}")
    private String toEmail;

    public ContactService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public ContactMessage saveMessage(ContactRequest request) {
        ContactMessage msg = new ContactMessage(
                request.getName(),
                request.getEmail(),
                request.getMessage());
        msg.setId(idCounter.getAndIncrement());
        messages.add(msg);

        logger.info("New contact message from: {} <{}>", msg.getName(), msg.getEmail());

        try {
            sendEmail(msg);
            logger.info("Email sent successfully to {}", toEmail);
        } catch (Exception e) {
            logger.error("Failed to send email: {}", e.getMessage());
        }

        return msg;
    }

    private void sendEmail(ContactMessage msg) {
        SimpleMailMessage email = new SimpleMailMessage();
        email.setTo(toEmail);
        email.setSubject("💼 Portfolio Contact: " + msg.getName());
        email.setText(
                "You have a new message from your portfolio!\n\n" +
                        "Name:    " + msg.getName() + "\n" +
                        "Email:   " + msg.getEmail() + "\n" +
                        "Time:    " + msg.getCreatedAt() + "\n\n" +
                        "Message:\n" + msg.getMessage() + "\n\n" +
                        "---\nReply directly to: " + msg.getEmail());
        email.setReplyTo(msg.getEmail());
        mailSender.send(email);
    }

    public List<ContactMessage> getAllMessages() {
        return new ArrayList<>(messages);
    }
}