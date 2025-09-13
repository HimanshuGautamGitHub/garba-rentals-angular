import { Injectable } from '@angular/core';
import { Faq } from '../models/faq.model';

@Injectable({ providedIn: 'root' })
export class FaqService {
  private faqs: Faq[] = [
    { question: 'How long can I rent a dress?', answer: 'You can rent a dress for 3-7 days depending on availability.' },
    { question: 'Do you provide delivery?', answer: 'Yes, we provide doorstep delivery in major cities.' },
    { question: 'Can I try the dresses before booking?', answer: 'Yes, you can schedule a trial appointment at our showroom.' },
    { question: 'What if the dress gets damaged?', answer: 'Minor wear is acceptable. Major damages may incur repair charges.' }
  ];

  getFaqs(): Faq[] {
    return this.faqs;
  }
}
