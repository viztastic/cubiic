import { Component, OnInit } from '@angular/core';

interface NavItem {
  label: string;
  isOnSamePage: boolean;
  idRef?: string;
  url?: string;
  fragment?: string;
  isActive?: boolean;
}

interface Logo {
  isOnSamePage: boolean;
  idRef?: string;
  url?: string;
  fragment?: string;
}

interface HeaderStyling {
  goDark?: boolean;
  underlineAll?: boolean;
}

export interface HeaderContents {
  style?: HeaderStyling;
  logo?: Logo;
  nav?: NavItem[];
}

@Component({
  selector: 'tms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cubiicHeaderContents: HeaderContents = {
    nav: [
      {
        label: 'Why Cubiic',
        isOnSamePage: true,
        idRef: '#overview'
      },
      {
        label: 'Request a Briefing',
        isOnSamePage: false,
        url: '/briefing/'
      },
      {
        label: 'Contact Us',
        isOnSamePage: true,
        idRef: '#contact'
      }
  ]
  };
}
