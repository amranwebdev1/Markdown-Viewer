# HTML মাষ্টার কোর্স টিউটরিয়াল - পার্ট ৪

## HTML বেস্ট প্র্যাকটিসেস

### স্ট্রাকচারাল স্ট্যান্ডার্ডস
1. **সঠিক ডকটাইপ ব্যবহার**
```html
<!DOCTYPE html>
```

2. **ভাষা অ্যাট্রিবিউট সেট করা**
```html
<html lang="bn">
```

3. **ক্যারেক্টার এনকোডিং ডিক্লেয়ার করা**
```html
<meta charset="UTF-8">
```

4. **ভিউপোর্ট মেটা ট্যাগ**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### সিমান্টিক মার্কআপ
```html
<!-- খারাপ উদাহরণ -->
<div id="header"></div>
<div class="section"></div>
<div id="footer"></div>

<!-- ভাল উদাহরণ -->
<header></header>
<main>
    <article></article>
    <section></section>
</main>
<footer></footer>
```

### অ্যাক্সেসিবিলিটি বেস্ট প্র্যাকটিস
1. **অল্ট টেক্সট যোগ করা**
```html
<img src="logo.png" alt="আমাদের কোম্পানির লোগো">
```

2. **লেবেল সহ ফর্ম কন্ট্রোল**
```html
<label for="username">ব্যবহারকারীর নাম:</label>
<input type="text" id="username" name="username">
```

3. **ARIA ল্যান্ডমার্ক রোলস**
```html
<nav role="navigation">
    <!-- মেনু আইটেম -->
</nav>
```

## HTML পারফরমেন্স অপ্টিমাইজেশন

### ইমেজ অপ্টিমাইজেশন
```html
<!-- লেসিভ লোডিং -->
<img src="image.jpg" alt="বর্ণনা" loading="lazy">

<!-- রেস্পন্সিভ ইমেজ -->
<img srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w"
     sizes="(max-width: 600px) 500px, (max-width: 1200px) 1000px, 1500px"
     src="medium.jpg" alt="বর্ণনা">
```

### স্ক্রিপ্ট লোডিং অপ্টিমাইজেশন
```html
<!-- ডিফারড লোডিং -->
<script src="script.js" defer></script>

<!-- অ্যাসিঙ্ক লোডিং -->
<script src="analytics.js" async></script>
```

### প্রিফেচ ও প্রিলোড রিসোর্স
```html
<!-- গুরুত্বপূর্ণ রিসোর্স প্রিলোড -->
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>

<!-- ডিএনএস প্রিফেচ -->
<link rel="dns-prefetch" href="https://cdn.example.com">
```

## HTML SEO টেকনিকস

### বেসিক SEO মেটাডেটা
```html
<title>পেজ টাইটেল (৫৫-৬০ ক্যারেক্টার)</title>
<meta name="description" content="পেজ ডেসক্রিপশন (১৫০-১৬০ ক্যারেক্টার)">
<meta name="keywords" content="কীওয়ার্ড১, কীওয়ার্ড২, কীওয়ার্ড৩">
```

### স্ট্রাকচার্ড ডেটা (Schema.org)
```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "আমাদের কোম্পানি",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "১২৩ রাস্তার নাম",
        "addressLocality": "ঢাকা",
        "addressRegion": "ঢাকা",
        "postalCode": "১২৩০",
        "addressCountry": "BD"
    }
}
</script>
```

### ক্যানোনিকাল URL
```html
<link rel="canonical" href="https://example.com/main-page">
```

### সোশ্যাল মিডিয়া মেটা
```html
<!-- ফেসবুক ওপেন গ্রাফ -->
<meta property="og:title" content="পেজ টাইটেল">
<meta property="og:description" content="পেজ ডেসক্রিপশন">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:url" content="https://example.com/page-url">

<!-- টুইটার কার্ড -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="পেজ টাইটেল">
<meta name="twitter:description" content="পেজ ডেসক্রিপশন">
<meta name="twitter:image" content="https://example.com/image.jpg">
```

## HTML সিকিউরিটি বেস্ট প্র্যাকটিস

### ফর্ম সিকিউরিটি
```html
<!-- CSRF প্রোটেকশন -->
<form action="/submit" method="post">
    <input type="hidden" name="csrf_token" value="RANDOM_TOKEN_VALUE">
    <!-- ফর্ম ফিল্ড -->
</form>
```

### কন্টেন্ট সিকিউরিটি পলিসি (CSP)
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' https://trusted.cdn.com">
```

### স্যান্ডবক্সড ইফ্রেম
```html
<iframe src="external-content.html" 
        sandbox="allow-scripts allow-same-origin"></iframe>
```

## HTML5 APIs (সংক্ষিপ্ত ওভারভিউ)

### জিওলোকেশন API
```javascript
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
```

### ওয়েব স্টোরেজ API
```javascript
localStorage.setItem('key', 'value');
const data = localStorage.getItem('key');
```

### ড্রাগ অ্যান্ড ড্রপ API
```html
<div draggable="true" ondragstart="drag(event)"></div>
<div ondrop="drop(event)" ondragover="allowDrop(event)"></div>
```

### ওয়েব ওয়ার্কার API
```javascript
const worker = new Worker('worker.js');
worker.postMessage(data);
```

## HTML ডিবাগিং টেকনিকস

### ভ্যালিডেশন টুলস
```html
<!-- W3C ভ্যালিডেটর -->
https://validator.w3.org/

<!-- Lighthouse অডিট -->
Chrome DevTools > Lighthouse
```

### সিমান্টিক স্ট্রাকচার চেক
```html
<!-- Chrome DevTools ব্যবহার করে -->
Elements > Accessibility > Check for issues
```

### পারফরমেন্স মনিটরিং
```html
<!-- Chrome DevTools ব্যবহার করে -->
Performance > Record
```

## HTML ফিউচার ট্রেন্ডস

### ওয়েব কম্পোনেন্টস
```html
<template id="user-card">
    <style>
        .card { /* স্টাইল */ }
    </style>
    <div class="card">
        <slot name="username"></slot>
        <slot name="email"></slot>
    </div>
</template>

<script>
class UserCard extends HTMLElement {
    constructor() {
        super();
        // কম্পোনেন্ট লজিক
    }
}
customElements.define('user-card', UserCard);
</script>

<!-- ব্যবহার -->
<user-card>
    <span slot="username">জন ডো</span>
    <span slot="email">john@example.com</span>
</user-card>
```

### প্রগ্রেসিভ ওয়েব অ্যাপস (PWA)
```html
<!-- ম্যানিফেস্ট ফাইল -->
<link rel="manifest" href="/manifest.webmanifest">

<!-- সার্ভিস ওয়ার্কার রেজিস্ট্রেশন -->
<script>
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
}
</script>
```

## HTML লার্নিং রিসোর্সেস

### অনলাইন টিউটোরিয়াল
- MDN Web Docs (https://developer.mozilla.org)
- W3Schools (https://www.w3schools.com)
- freeCodeCamp (https://www.freecodecamp.org)

### প্র্যাকটিস প্ল্যাটফর্ম
- CodePen (https://codepen.io)
- JSFiddle (https://jsfiddle.net)
- CodeSandbox (https://codesandbox.io)

### কমিউনিটি ফোরাম
- Stack Overflow (https://stackoverflow.com)
- DEV Community (https://dev.to)

এই ছিল HTML মাষ্টার কোর্সের চতুর্থ ও শেষ পার্ট। আশা করি এই সম্পূর্ণ কোর্সটি আপনাকে HTML-এ দক্ষতা অর্জনে সহায়তা করবে।