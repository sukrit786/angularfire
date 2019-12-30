import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  constructor(public title: Title, public meta: Meta) {}

  ngOnInit() {
    this.title.setTitle("Am the main pAge");
    this.meta.addTags([
      { name: "twitter:card", content: "summary" },
      { name: "og:url", content: "/about" },
      { name: "og:title", content: "Main Page Emicon" },
      { name: "og:description", content: "Emicon KA Page" },
      {
        name: "og:image",
        content:
          "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi5x7-ykN3mAhUGxzgGHZi_Ay4QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Femicon-advisory-services-llp&psig=AOvVaw3rcfn8HMNIO_-LcQV8-NqN&ust=1577786905434488"
      }
    ]);
  }
}
