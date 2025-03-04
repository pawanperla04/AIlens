import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';


type Item = { title: string; content: string; active?: boolean }

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  items: Item[] = [
    {
      title: "Bankruptcy Prediction",
      content: `
    <ul>
      <li>Conducted <strong>Exploratory Data Analysis (EDA)</strong> on financial datasets to understand key patterns and features relevant to bankruptcy prediction.</li>
      <li>Trained machine learning models using various supervised algorithms to predict bankruptcy risk with high accuracy.</li>
      <li>Implemented feature engineering techniques and model optimization to enhance predictive performance.</li>
      <li>Developed a user-friendly web application using <strong>Streamlit</strong> to interact with the bankruptcy prediction model.</li>
    </ul>
  `,
    },
    {
      title: "Sentiment Analysis",
      content: `<ul">
      <li>Project Focus: Assigning sentiment scores to text reviews, aiding in understanding customer satisfaction or public opinion, and facilitating data-driven decision-making processes.</li>
<li>Developed a Sentiment Predictor web application using Python and Streamlit, providing users with a tool to analyze sentiment in textual reviews.</li>
<li>Utilized the SpaCy library for natural language processing and integrated an Afinn sentiment lexicon from a CSV file.</li>
<li>Enhanced user experience by visually presenting the sentiment score and included logic to categorize sentiment into different levels.</li>

      </ul>`,
      active: false,
    },
    {
      title: "URL Shortner",
      content: `<ul>
      <li>Project Focus :A URL shortener is a tool or service that converts a long URL  into a shorter URL.</li>
      <li>Developed a URL shortener application using Python, utilizing the pyshorteners library to generate shortened URLs from long URLs.</li></ul>`,
      active: false,
    },
  ];
  selecetdItem: Item = this.items[0];
  toggleItem(item: Item) {
    // this.items.forEach((item, i) => {
    //   item.active = i === index;
    // });
    console.log(item);
    this.selecetdItem = item;


  }

}
