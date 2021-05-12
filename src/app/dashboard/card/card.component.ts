import { animate, style, transition, trigger } from "@angular/animations";
import { Component, Input, OnInit } from "@angular/core";
import { SkillService } from "src/app/skill.service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  waitingLike: boolean = false;
  loadingPic: boolean = true;

  @Input() card;
  constructor(private skillService: SkillService) {}

  ngOnInit() {}

  onLike(card: any) {
    const edit = {
      ...card,
      likes: card.likes + 1,
    };

    this.waitingLike = true;

    this.skillService.saveSkill(edit).subscribe((_) => {
      this.skillService.getSkill(edit.id).subscribe((res) => {
        this.card = res;

        this.waitingLike = false;
      });
    });
  }

  onShare(card: any) {
    window.open("https://www.linkedin.com/in/igor-o-santos/", "_blank");
  }

  onLoad() {
    this.loadingPic = false;
  }

  getLikeClass(likes) {
    if (likes >= 5 && likes < 10) {
      return "app-blue-color";
    }

    if (likes >= 10) {
      return "app-primary-color";
    }

    return "";
  }
}
