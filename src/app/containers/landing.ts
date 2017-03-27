import { Component } from '@angular/core';

@Component({
  selector: 'landing-container',
  styles: [` 
     
    `],
  template: `
    <div class="landing-container">
      <main-desc 
                [descCard]="mainCard"
            >
            </main-desc>
      <two-desc
                [descCard]="card"
                *ngFor="
                    let card of descCards;
                "
            >
            </two-desc>
  
        <testimonials-desc
            [testimonials]="testimonialsCards">
        </testimonials-desc>

        <call-to-action
            [callToAction]="callToActionCard"
        >
        </call-to-action>
        <!--
        <footer></footer>
        --->
    </div>
  `
})

export class LandingContainer {
    mainCard = {
        title: 'Build better products, engage your clients',
        sub: 'Store and manage all user feedback in one single app.',
        inputText: 'Your email...',
        butText: 'Send',
    };

    descCards = [
        {
            title: 'A comprehensive user knowledge base', 
            // tslint:disable-next-line:max-line-length
            text: 'Harvestr integrates with existing business applications to aggregate all product related feedback. Never lose valuable feedback again.', 
            textPositionIsLeft: false,
            imageUrl: '../../img/a.png',
            color: 'white'
        },
        {
            title: 'Identify issues and opportunities ', 
            // tslint:disable-next-line:max-line-length
            text: 'Our interface makes it easy for you to organise feedbacks and insights help you get a clear view on the most urgent needs.', 
            textPositionIsLeft: true,
            imageUrl: '../../img/b.png',
            color: 'white'
        },
        {
            title: 'Close the feedback loop, improve communication', 
            // tslint:disable-next-line:max-line-length
            text: 'Interact with users and teammates without leaving Harvestr. Keep everyone in the loop by providing updates about product related decisions and improvements.',  
            textPositionIsLeft: false,
            imageUrl: '../../img/c.png',
            color: 'white'
        },
        {
            title: 'Get better feedback and increase user retention', 
            // tslint:disable-next-line:max-line-length
            text: 'Engaging users and teammates increases the quality of their contributions and helps Product Managers develop features and products that will be used even more.', 
            textPositionIsLeft: true,
            imageUrl: '../../img/2.jpg',
            color: 'white'
        }
    ];

    testimonialsCards = [
        {
            name: 'Maïa Metz',
            pictureUrl: '../../img/profile.jpg',
            role: 'Head of Product',
            company: 'Aircall',
            // tslint:disable-next-line:max-line-length
            testimonial: 'At Aircall, the support, sales and customer success teams have a lot of valuable customer feedback to share. I really need a tool to aggregate this information and to communicate about product-related decisions to the other teams. Great job Harvestr!'
        }/*,
        {
            name: 'Lucas Didier',
            pictureUrl: '../../img/2.jpg',
            role: 'Product Manager',
            company: 'Blablacar',
            // tslint:disable-next-line:max-line-length
            testimonial: 'I need user analysis and reports but I also need to dig deeper into the large amount of feedback we have to get more details, to look at verbatims, etc'
        }*/
    ];

    callToActionCard = {
        color: '#F3F2F2',
        // tslint:disable-next-line:max-line-length
        text: 'Harvestr is the perfect app for Product Managers, Product Owners, User Researchers and everyone else trying to develop the best products and services for their users.',
        call: 'We are working hard to launch soon. Be among the first to try Harvestr for free!',
        butText: 'Join us!'
    };
}
