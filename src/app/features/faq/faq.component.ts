import { Component, OnInit } from '@angular/core';
import { FaqService } from '../../core/services/faq.service';
import { Faq } from '../../core/models/faq.model';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html'
})
export class FaqComponent implements OnInit {
  faqs: Faq[] = [];
  constructor(private faqService: FaqService) {}
  ngOnInit(): void { this.faqs = this.faqService.getFaqs(); }
}
