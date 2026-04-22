package com.mehedi.portfolio.model;

public class Skill {
    private Long id;
    private String name;
    private String category;
    private int proficiency;
    private String icon;

    public Skill() {}

    public Skill(Long id, String name, String category, int proficiency, String icon) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.proficiency = proficiency;
        this.icon = icon;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    public int getProficiency() { return proficiency; }
    public void setProficiency(int proficiency) { this.proficiency = proficiency; }
    public String getIcon() { return icon; }
    public void setIcon(String icon) { this.icon = icon; }
}
