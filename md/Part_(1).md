# HTML মাষ্টার কোর্স টিউটরিয়াল - পার্ট ১

## পরিচিতি
HTML (HyperText Markup Language) হলো ওয়েব ডেভেলপমেন্টের ভিত্তি। এটি একটি মার্কআপ ল্যাঙ্গুয়েজ যা ওয়েব পেজের কাঠামো তৈরি করতে ব্যবহৃত হয়।

### HTML এর ইতিহাস
- ১৯৯১ সালে টিম বার্নার্স লি দ্বারা তৈরি
- HTML 2.0 (১৯৯৫)
- HTML 3.2 (১৯৯৭)
- HTML 4.01 (১৯৯৯)
- XHTML (২০০০)
- HTML5 (২০১৪)

## বেসিক HTML ডকুমেন্ট স্ট্রাকচার
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ডকুমেন্টের শিরোনাম</title>
</head>
<body>
    <!-- পেজের কন্টেন্ট এখানে যাবে -->
</body>
</html>
```

### প্রতিটি ট্যাগের ব্যাখ্যা:
1. `<!DOCTYPE html>` - ডকুমেন্ট টাইপ ডিক্লেয়ারেশন
2. `<html>` - রুট এলিমেন্ট
3. `<head>` - মেটাডেটা কন্টেইনার
4. `<meta charset="UTF-8">` - ক্যারেক্টার এনকোডিং
5. `<title>` - ব্রাউজার ট্যাবে দেখানো শিরোনাম
6. `<body>` - পেজের ভিজিবল কন্টেন্ট

## বেসিক HTML ট্যাগসমূহ

### হেডিং ট্যাগ
```html
<h1>মুখ্য শিরোনাম</h1>
<h2>সাব-শিরোনাম</h2>
<h3>ছোট শিরোনাম</h3>
<h4>আরও ছোট</h4>
<h5>সামান্য শিরোনাম</h5>
<h6>সবচেয়ে ছোট</h6>
```

### প্যারাগ্রাফ ও টেক্সট ফরম্যাটিং
```html
<p>এটি একটি প্যারাগ্রাফ।</p>
<p>এটি আরেকটি প্যারাগ্রাফ <br> লাইন ব্রেক সহ।</p>

<b>বোল্ড টেক্সট</b>
<strong>স্ট্রং টেক্সট (সিমান্টিক)</strong>
<i>ইটালিক টেক্সট</i>
<em>এমফ্যাসাইজড টেক্সট (সিমান্টিক)</em>
<mark>হাইলাইটেড টেক্সট</mark>
<small>ছোট টেক্সট</small>
<del>ডিলিটেড টেক্সট</del>
<ins>ইনসার্টেড টেক্সট</ins>
<sup>সুপারস্ক্রিপ্ট</sup>
<sub>সাবস্ক্রিপ্ট</sub>
```

### লিংক ও ইমেজ
```html
<!-- অ্যাবসোলিউট URL -->
<a href="https://example.com">এক্সাম্পল সাইট</a>

<!-- রিলেটিভ URL -->
<a href="about.html">আমাদের সম্পর্কে</a>

<!-- নতুন ট্যাবে খুলবে -->
<a href="https://example.com" target="_blank">নতুন ট্যাবে খুলবে</a>

<!-- ইমেজ -->
<img src="image.jpg" alt="বর্ণনামূলক টেক্সট">
<img src="image.jpg" alt="বর্ণনা" width="500" height="600">
```

### লিস্ট তৈরি
```html
<!-- আনঅর্ডার্ড লিস্ট -->
<ul>
    <li>আইটেম ১</li>
    <li>আইটেম ২</li>
    <li>আইটেম ৩</li>
</ul>

<!-- অর্ডার্ড লিস্ট -->
<ol>
    <li>প্রথম আইটেম</li>
    <li>দ্বিতীয় আইটেম</li>
    <li>তৃতীয় আইটেম</li>
</ol>

<!-- ডেসক্রিপশন লিস্ট -->
<dl>
    <dt>কফি</dt>
    <dd>- কালো গরম পানীয়</dd>
    <dt>দুধ</dt>
    <dd>- সাদা ঠান্ডা পানীয়</dd>
</dl>
```

### টেবিল তৈরি
```html
<table border="1">
    <tr>
        <th>নাম</th>
        <th>ইমেইল</th>
        <th>ফোন</th>
    </tr>
    <tr>
        <td>রহিম</td>
        <td>rahim@example.com</td>
        <td>০১৭১২৩৪৫৬৭৮</td>
    </tr>
    <tr>
        <td>করিম</td>
        <td>karim@example.com</td>
        <td>০১৮৯৮৭৬৫৪৩২</td>
    </tr>
</table>
```

### ফর্ম এলিমেন্টস
```html
<form action="/submit" method="post">
    <label for="username">ব্যবহারকারীর নাম:</label>
    <input type="text" id="username" name="username"><br>
    
    <label for="password">পাসওয়ার্ড:</label>
    <input type="password" id="password" name="password"><br>
    
    <label for="email">ইমেইল:</label>
    <input type="email" id="email" name="email"><br>
    
    <label for="age">বয়স:</label>
    <input type="number" id="age" name="age" min="18" max="99"><br>
    
    <label for="birthday">জন্মদিন:</label>
    <input type="date" id="birthday" name="birthday"><br>
    
    <label for="color">পছন্দের রং:</label>
    <input type="color" id="color" name="color"><br>
    
    <label for="file">ফাইল আপলোড:</label>
    <input type="file" id="file" name="file"><br>
    
    <label for="message">বার্তা:</label>
    <textarea id="message" name="message" rows="4" cols="50"></textarea><br>
    
    <label for="country">দেশ:</label>
    <select id="country" name="country">
        <option value="bd">বাংলাদেশ</option>
        <option value="in">ভারত</option>
        <option value="pk">পাকিস্তান</option>
    </select><br>
    
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">পুরুষ</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">মহিলা</label><br>
    
    <input type="checkbox" id="subscribe" name="subscribe" value="yes">
    <label for="subscribe">নিউজলেটার সাবস্ক্রাইব করুন</label><br>
    
    <input type="submit" value="জমা দিন">
    <input type="reset" value="রিসেট">
    <button type="button">সাধারণ বাটন</button>
</form>
```

এই হলো HTML মাষ্টার কোর্সের প্রথম পার্ট। পরবর্তী পার্টে আমরা আরও অ্যাডভান্সড HTML টপিক্স নিয়ে আলোচনা করব।