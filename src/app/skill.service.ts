import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SkillService {
  url = "api/skills/";

  constructor(private http: HttpClient) {}

  saveSkill(skill) {
    return this.http.put(this.url + skill.id, skill);
  }

  getSkill(id) {
    return this.http.get(this.url + id);
  }
}
