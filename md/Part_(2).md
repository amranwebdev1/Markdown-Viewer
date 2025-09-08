# HTML মাষ্টার কোর্স টিউটরিয়াল - পার্ট ২

## সিমান্টিক HTML এলিমেন্টস

HTML5-এ সিমান্টিক ট্যাগগুলো প্রবর্তিত হয়েছে যা ওয়েব পেজের বিভিন্ন অংশকে সঠিকভাবে বর্ণনা করে:

```html
<header>
    <h1>ওয়েবসাইটের শিরোনাম</h1>
    <p>স্লোগান বা ট্যাগলাইন</p>
</header>

<nav>
    <ul>
        <li><a href="#">হোম</a></li>
        <li><a href="#">আমাদের সম্পর্কে</a></li>
        <li><a href="#">সেবাসমূহ</a></li>
    </ul>
</nav>

<main>
    <article>
        <h2>নিবন্ধের শিরোনাম</h2>
        <p>নিবন্ধের কন্টেন্ট...</p>
    </article>
    
    <section>
        <h2>অন্যান্য বিভাগ</h2>
        <p>অতিরিক্ত কন্টেন্ট...</p>
    </section>
</main>

<aside>
    <h3>সম্পর্কিত লিংক</h3>
    <ul>
        <li><a href="#">লিংক ১</a></li>
        <li><a href="#">লিংক ২</a></li>
    </ul>
</aside>

<footer>
    <p>কপিরাইট © ২০২৩</p>
</footer>
```

### সিমান্টিক ট্যাগের সুবিধা:
1. SEO উন্নত করে
2. স্ক্রিন রিডারদের জন্য অ্যাক্সেসিবিলিটি বৃদ্ধি করে
3. কোডের রিডাবিলিটি উন্নত করে
4. পেজ স্ট্রাকচার স্পষ্ট করে

## ডিভ ও স্প্যান এলিমেন্ট

```html
<!-- ব্লক লেভেল এলিমেন্ট -->
<div class="container">
    <h2>এটি একটি ডিভ</h2>
    <p>ডিভ এলিমেন্ট ব্লক লেভেল কন্টেইনার হিসেবে কাজ করে</p>
</div>

<!-- ইনলাইন এলিমেন্ট -->
<p>এটি একটি <span style="color:red;">স্প্যান</span> এলিমেন্টের উদাহরণ</p>
```

## মাল্টিমিডিয়া এলিমেন্টস

### অডিও প্লেয়ার
```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    আপনার ব্রাউজার অডিও এলিমেন্ট সাপোর্ট করে না
</audio>
```

### ভিডিও প্লেয়ার
```html
<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    আপনার ব্রাউজার ভিডিও এলিমেন্ট সাপোর্ট করে না
</video>
```

### ইফ্রেম
```html
<iframe 
    src="https://www.example.com" 
    title="উদাহরণ ওয়েবসাইট"
    width="600"
    height="400">
</iframe>
```

## HTML এনটিটিস

HTML এ বিশেষ ক্যারেক্টার দেখানোর জন্য এনটিটিস ব্যবহার করা হয়:

```html
&lt;    <!-- < -->
&gt;    <!-- > -->
&amp;   <!-- & -->
&quot;  <!-- " -->
&apos;  <!-- ' -->
&nbsp;  <!-- নন-ব্রেকিং স্পেস -->
&copy;  <!-- © -->
&reg;   <!-- ® -->
```

## HTML কমেন্টস

```html
<!-- এটি একটি কমেন্ট, ব্রাউজারে দেখাবে না -->
<p>এই টেক্সট দেখা যাবে</p>
<!-- 
    এটি একটি 
    মাল্টিলাইন 
    কমেন্ট 
-->
```

## HTML গ্লোবাল অ্যাট্রিবিউটস

```html
<div id="unique-id" class="class1 class2" style="color:blue;" 
    title="টুলটিপ টেক্সট" data-custom="value" hidden>
    গ্লোবাল অ্যাট্রিবিউট উদাহরণ
</div>
```

### গুরুত্বপূর্ণ গ্লোবাল অ্যাট্রিবিউটস:
1. `id` - ইউনিক আইডেন্টিফায়ার
2. `class` - CSS/JavaScript সিলেক্টরের জন্য
3. `style` - ইনলাইন CSS
4. `title` - টুলটিপ টেক্সট
5. `data-*` - কাস্টম ডেটা অ্যাট্রিবিউট
6. `hidden` - এলিমেন্ট লুকিয়ে রাখে
7. `lang` - ভাষা নির্দিষ্ট করে
8. `contenteditable` - ইউজার এডিট করার সুযোগ দেয়

## HTML ফর্ম ভ্যালিডেশন

```html
<form>
    <label for="username">ব্যবহারকারীর নাম (আবশ্যক):</label>
    <input type="text" id="username" name="username" required><br>
    
    <label for="email">ইমেইল:</label>
    <input type="email" id="email" name="email" required><br>
    
    <label for="password">পাসওয়ার্ড (ন্যূনতম ৮ ক্যারেক্টার):</label>
    <input type="password" id="password" name="password" 
           minlength="8" required><br>
    
    <label for="age">বয়স (১৮-৯৯):</label>
    <input type="number" id="age" name="age" min="18" max="99"><br>
    
    <label for="website">ওয়েবসাইট URL:</label>
    <input type="url" id="website" name="website"><br>
    
    <label for="search">খুঁজুন:</label>
    <input type="search" id="search" name="search"><br>
    
    <label for="phone">ফোন নম্বর:</label>
    <input type="tel" id="phone" name="phone" 
           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
           placeholder="০১৭-১২৩-৪৫৬৭"><br>
    
    <input type="submit" value="জমা দিন">
</form>
```

## HTML মেটাডেটা

```html
<head>
    <!-- ক্যারেক্টার এনকোডিং -->
    <meta charset="UTF-8">
    
    <!-- ভিউপোর্ট সেটিংস -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- পেজ ডেসক্রিপশন -->
    <meta name="description" content="বিনামূল্যে HTML শিখুন">
    
    <!-- কীওয়ার্ড -->
    <meta name="keywords" content="HTML, CSS, JavaScript">
    
    <!-- লেখক -->
    <meta name="author" content="জন ডো">
    
    <!-- রিফ্রেশ -->
    <meta http-equiv="refresh" content="30">
    
    <!-- ফেভিকন -->
    <link rel="icon" href="favicon.ico">
    
    <!-- CSS লিংক -->
    <link rel="stylesheet" href="styles.css">
    
    <!-- JavaScript ফাইল -->
    <script src="script.js"></script>
</head>
```

এই হলো HTML মাষ্টার কোর্সের দ্বিতীয় পার্ট। পরবর্তী পার্টে আমরা HTML5 এর অ্যাডভান্সড ফিচার এবং বেস্ট প্র্যাকটিসেস নিয়ে আলোচনা করব।