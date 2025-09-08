# HTML মাষ্টার কোর্স টিউটরিয়াল - পার্ট ৩

## HTML5 অ্যাডভান্সড ফিচারস

### ক্যানভাস এলিমেন্ট
```html
<canvas id="myCanvas" width="200" height="100" 
        style="border:1px solid #000000;">
</canvas>

<script>
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 150, 75);
</script>
```

### SVG ইন্টিগ্রেশন
```html
<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" 
            stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

### জিওলোকেশন API
```html
<button onclick="getLocation()">আমার লোকেশন দেখুন</button>
<p id="demo"></p>

<script>
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("demo").innerHTML = 
        "জিওলোকেশন আপনার ব্রাউজারে সাপোর্টেড নয়";
    }
}

function showPosition(position) {
    document.getElementById("demo").innerHTML = 
    "অক্ষাংশ: " + position.coords.latitude + 
    "<br>দ্রাঘিমাংশ: " + position.coords.longitude;
}
</script>
```

## HTML স্টোরেজ API

### লোকাল স্টোরেজ
```html
<script>
// ডেটা স্টোর করা
localStorage.setItem("name", "John Doe");

// ডেটা রিট্রিভ করা
document.getElementById("result").innerHTML = 
localStorage.getItem("name");

// ডেটা রিমুভ করা
localStorage.removeItem("name");

// সব ডেটা ক্লিয়ার করা
localStorage.clear();
</script>
```

### সেশন স্টোরেজ
```html
<script>
// সেশন期间 ডেটা স্টোর করা
sessionStorage.setItem("name", "John Doe");

// ডেটা রিট্রিভ করা
document.getElementById("result").innerHTML = 
sessionStorage.getItem("name");
</script>
```

## HTML ওয়েব ওয়ার্কার

```html
<script>
// মেইন স্ক্রিপ্ট
if (typeof(Worker) !== "undefined") {
    const w = new Worker("worker.js");
    w.onmessage = function(event) {
        document.getElementById("result").innerHTML = event.data;
    };
} else {
    document.getElementById("result").innerHTML = 
    "ওয়েব ওয়ার্কার সাপোর্টেড নয়!";
}
</script>

<!-- worker.js ফাইল -->
<script>
let i = 0;
function timedCount() {
    i++;
    postMessage(i);
    setTimeout("timedCount()",500);
}
timedCount();
</script>
```

## HTML ড্রাগ অ্যান্ড ড্রপ

```html
<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
<img id="drag1" src="image.png" draggable="true" 
     ondragstart="drag(event)" width="100" height="100">

<script>
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
</script>
```

## HTML মিডিয়া ইভেন্টস

```html
<video id="myVideo" width="320" height="176" controls>
    <source src="movie.mp4" type="video/mp4">
</video>

<script>
const vid = document.getElementById("myVideo");

vid.onplay = function() {
    console.log("ভিডিও প্লে শুরু হয়েছে");
};

vid.onpause = function() {
    console.log("ভিডিও পজ হয়েছে");
};

vid.onseeked = function() {
    console.log("ভিডিও স্ক্রাব করা হয়েছে");
};
</script>
```

## HTML ফর্ম ভ্যালিডেশন API

```html
<form id="myForm">
    <input type="text" id="username" required>
    <input type="submit">
</form>

<script>
const form = document.getElementById("myForm");
const username = document.getElementById("username");

form.addEventListener("submit", function(event) {
    if (!username.validity.valid) {
        if (username.validity.valueMissing) {
            username.setCustomValidity("ব্যবহারকারীর নাম দিতে হবে");
        } else {
            username.setCustomValidity("");
        }
    }
});
</script>
```

## HTML টেমপ্লেট এলিমেন্ট

```html
<template id="productTemplate">
    <div class="product">
        <h2 class="title"></h2>
        <p class="price"></p>
    </div>
</template>

<script>
const template = document.getElementById("productTemplate");
const product = template.content.cloneNode(true);

product.querySelector(".title").textContent = "নতুন প্রোডাক্ট";
product.querySelector(".price").textContent = "৳500";

document.body.appendChild(product);
</script>
```

## HTML ডেটালিস্ট এলিমেন্ট

```html
<input list="browsers">
<datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Safari">
    <option value="Edge">
    <option value="Opera">
</datalist>
```

## HTML প্রোগ্রেস ও মিটার এলিমেন্ট

```html
<label for="file">ডাউনলোড প্রগ্রেস:</label>
<progress id="file" value="32" max="100"> 32% </progress>

<label for="disk_c">ডিস্ক ব্যবহার:</label>
<meter id="disk_c" value="0.6">60%</meter>
```

## HTML ডিটেইলস ও সামারি এলিমেন্ট

```html
<details>
    <summary>আরও তথ্য দেখুন</summary>
    <p>এই বিভাগে অতিরিক্ত তথ্য রয়েছে যা ডিফল্টভাবে লুকানো থাকে।</p>
</details>
```

## HTML ইনপুট টাইপস

```html
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="month">
<input type="number">
<input type="range">
<input type="search">
<input type="tel">
<input type="time">
<input type="url">
<input type="week">
```

## HTML অ্যাক্সেসিবিলিটি ফিচারস

```html
<!-- ARIA অ্যাট্রিবিউট -->
<div role="navigation" aria-label="মেইন মেনু">
    <!-- মেনু আইটেম -->
</div>

<!-- লেবেল সহ ফর্ম এলিমেন্ট -->
<label for="search">খুঁজুন:</label>
<input type="search" id="search" name="search" 
       aria-label="সাইট সার্চ">

<!-- স্কিপ লিংক -->
<a href="#maincontent" class="skip-link">মেইন কন্টেন্টে যান</a>

<!-- হাই কনট্রাস্ট সাপোর্ট -->
<button style="background-color: #000; color: #fff;">সাবমিট</button>
```

এই হলো HTML মাষ্টার কোর্সের তৃতীয় পার্ট। পরবর্তী পার্টে আমরা HTML বেস্ট প্র্যাকটিসেস, পারফরমেন্স অপ্টিমাইজেশন এবং SEO টেকনিকস নিয়ে আলোচনা করব।