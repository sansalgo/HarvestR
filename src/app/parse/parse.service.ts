import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample HTML Parse Test</title>
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="about">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae quam nec eros pulvinar dignissim.</p>
        </section>
        <section id="services">
            <h2 data-hello="world">Our Services</h2>
            <ul>
                <li>Web Development</li>
                <li>Graphic Design</li>
                <li>Content Writing</li>
            </ul>
        </section>
        <section id="contact">
            <h2 id='idName' data-hello="2">Contact Us</h2>
            <address class="p-3 d-flex">
                Email: info@example.com<br>
                Phone: +123456789<br>
                Address: 123 Main Street, City, Country
            </address>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>
</body>
</html>
`;

export interface ParseResponse {
  preview: string[];
  types: string[];
  ids: string[];
  classes: string[];
  attributeNames: string[];
  attrComparisons: string[];
  attributeValues: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ParseService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/parse';

  parse(selector: string = ''): Observable<any> {
    const formData = new FormData();
    formData.append('html', html);
    formData.append('selector', selector);

    return this.http.post(this.url, formData);
  }
}
