import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titlepage:string='My Portfolio';
  fname:string='Anuj Mangaonkar';
  profile:string='Web Developer!';
  introLine:string='I am a Frontend Web Developer. I ❤️ to design and create web applications.';
  education1:string='B.Tech [Mechanical]';
  detail1:string='DKTE Societys Textile & Engineering Institute (An Autonomous Institute), Ichalkaranji, Maharashtra';

  cv = "assets/Anuj Mangaonkar Resume.pdf";

  education2:string='12th Science';
  detail2:string='Rajput Junior College of Science, Sangli, Maharashtra';

  
  education3:string='10th Science';
  detail3:string='Shri Ramrao Ingawale Highschool, Hatkanangle, Maharashtra';

  // mySkills1:string='#c  #c++  #Core  #MySQL  #HTMl  #CSS  #JavaScript'
  // mySkills2:string='#Bootstrap  #jQuery  #Angular'


  c = "assets/C.png";
  cpp = "assets/CPP.png";
  java = "assets/Java.png";
  mysql = "assets/MySQL.png";
  
  html = "assets/HTML.png";
  css = "assets/MySQL.png";
  js = "assets/JavaScript.png";
  jq = "assets/jQuery.png";
  bs = "assets/Bootstrap.png";
  
  angular = "assets/Angular.png";
  node = "assets/nodeJS.png";
  express = "assets/ExpressJS.png";
  mongo = "assets/MongoDB.png";
  spring = "assets/SpringBoot.png";




  project1:string='PortFolio Website';
  ProDetails1:string=' - A portfolio website is a digital platform where individuals showcase their work, skills, and accomplishments, often including examples of projects, artwork, or achievements';

  project2:string='Educaional Website';
  ProDetails2:string='- An educational website is an online platform designed to provide learning resources, courses, and information to support academic or skill development, offering accessible and interactive content for learners of all ages and backgrounds';

  project3:string='E-Commerse Website';
  ProDetails3:string='- An e-commerce website is an online platform where businesses and consumers can buy and sell products or services, facilitating electronic transactions and providing a convenient shopping experience through the internet';

  project4:string='Music Website';
  ProDetails4:string='- A musical website is an online platform dedicated to music, offering a diverse range of music-related content, including artist profiles, music streaming, concert information, and music news, providing a one-stop destination for music enthusiasts';



  birth:any='18-Sept-1997';
  city:string='Miraj';

  // image = "assets/portfolio/mountain.png";
  profilePic = "assets/myPhoto.png";

  fb = "assets/Facebook.png";
  tw = "assets/Twitter.png";
  lkdn = "assets/Linkdin.png";
  git = "assets/Github.png";

}
