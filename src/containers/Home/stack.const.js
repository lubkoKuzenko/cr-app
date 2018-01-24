export const stack = [{
  name: "HTML",
  description: `<p>HTML is the standard markup language for creating Web pages.</p>
  <ul>
    <li>HTML stands for Hyper Text Markup Language</li>
    <li>HTML describes the structure of Web pages using markup</li>
    <li>HTML elements are the building blocks of HTML pages</li>
    <li>HTML elements are represented by tags</li>
    <li>HTML tags label pieces of content such as "heading", "paragraph", "table", and so on</li>
    <li>Browsers do not display the HTML tags, but use them to render the content of the page</li>
  </ul>`
},{
  name: "CSS",
  description: `
  <ul>
    <li><b>CSS</b> stands for <b>C</b>ascading <b>S</b>tyle <b>S</b>heets</li>
    <li>CSS describes <strong>how HTML elements are to be displayed on screen,  
    paper, or in other media</strong></li>
    <li>CSS <strong>saves a lot of work</strong>. It can control the layout of 
    multiple web pages all at once</li>
    <li>External stylesheets are stored in <b>CSS files</b></li>
  </ul>`
},{
  name: 'HTML 5',
  description: `<div class="post-text" itemprop="text">
  <p>HTML5 has several goals which differentiate it from HTML4.</p>
  
  <h1>Consistency in Handling Malformed Documents</h1>
  
  <p>The primary one is <em>consistent, defined error handling</em>.  As you know, HTML purposely supports 'tag soup', or the ability to write malformed code and have it corrected into a valid document.  The problem is that the rules for doing this aren't written down anywhere.  When a new browser vendor wants to enter the market, they just have to test malformed documents in various browsers (especially IE) and reverse-engineer their error handling.  If they don't, then many pages won't display correctly (estimates place roughly 90% of pages on the net as being at least somewhat malformed).</p>
  
  <p>So, HTML5 is attempting to discover and codify this error handling, so that browser developers can all standardize and greatly reduce the time and money required to display things consistently.  As well, long in the future after HTML has died as a document format, historians may still want to read our documents, and having a completely defined parsing algorithm will greatly aid this.</p>
  
  <h1>Better Web Application Features</h1>
  
  <p>The secondary goal of HTML5 is to develop the ability of the browser to be an application platform, via HTML, CSS, and Javascript.  Many elements have been added directly to the language that are currently (in HTML4) Flash or JS-based hacks, such as <code>&lt;canvas&gt;</code>, <code>&lt;video&gt;</code>, and <code>&lt;audio&gt;</code>.  Useful things such as Local Storage (a js-accessible browser-built-in key-value database, for storing information beyond what cookies can hold), new input types such as date for which the browser can expose easy user interface (so that we don't have to use our js-based calendar date-pickers), and browser-supported form validation will make developing web applications much simpler for the developers, and make them much faster for the users (since many things will be supported natively, rather than hacked in via javascript).</p>
  
  <h1>Improved Element Semantics</h1>
  
  <p>There are many other smaller efforts taking place in HTML5, such as better-defined semantic roles for existing elements (<code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> now actually mean something different, and even <code>&lt;b&gt;</code> and <code>&lt;i&gt;</code> have vague semantics that should work well when parsing legacy documents) and adding new elements with useful semantics - <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;aside&gt;</code>, and <code>&lt;nav&gt;</code> should replace the majority of <code>&lt;div&gt;</code>s used on a web page, making your pages a bit more semantic, but more importantly, <em>easier to read</em>.  No more painful scanning to see just what that random <code>&lt;/div&gt;</code> is closing - instead you'll have an obvious <code>&lt;/header&gt;</code>, or <code>&lt;/article&gt;</code>, making the structure of your document much more intuitive.</p>
      </div>`
},{
  name: 'CSS 3',
  description: `<span class="rendered_qtext">Unlike the previous versions of the CSS specification, CSS3 has broken down the specification into smaller "modules". Each module either describes the newer capabilities or changes to the previous specification. One key point here is that backwards compatibility is preserved.<br>As a result of breaking down the specification into smaller pieces, each module is in a distinct state of readiness.<br>There are over 50 CSS modules that are in various states of readiness.<br>For the purpose of providing a quick insight, I am listing the modules here.<br><ol><li>Media Queries - enhancement of @media rules and "media" HTML markup element.</li><li>Selectors Level 3 - describes the element selectors used in CSS</li><li>Grid template layout - describes new way to position elements using constraints on their alignment to each other and on their flexibility.</li><li>Aural Style sheets -</li><li>Backgrounds and borders - describes background colors and images and the style of borders.</li><li>Basic user interface - describes styling for web pages</li><li>Basic Box model - describes the layout of block-level content in normal flow.</li><li>Extended Box model - provides extra control over positioning of floats and the size of boxes.</li><li>Marquee - describes the marquee effect.</li><li>Cascading and inheritance - describes how values are assigned to properties.</li><li>Color - describes color-relates aspects of CSS.</li><li>Fonts - describes fonts and font adjustments.</li><li>Generated Content for paged media</li><li>Page floats - contains properties to float elements to the top, bottom or side of a page in paginated renderings.</li><li>Generated and replaced content - defines how to put content before, after, or in place of an element.</li><li>Hyperlink - describes styling for hyperlinks.</li><li>Line layout - describes alignment of text and other boxes within a line.</li><li>Lists - contains properties for styling lists.</li><li>Multi-column layout - describes properties to flow content into flexibly-defined columns.</li><li>Object model - describes programming model.</li><li>CSSOM View model - describes way to inspect and manipulate the view information of a document.</li><li>Paged media</li><li>Positioned layout level 3 - describes ways in CSS to layout parts of a document.</li><li>Presentation levels - describes ways to step forward/backward through multiple renderings of the same document.</li><li>Ruby - describes properties to manipulate the positions of "ruby" (small annotations on top of or next to words).</li><li>Grid Layout - describes how to setup a flexible design grid for an element</li><li>Regions - describes what can be done with regions</li><li>Speech - contains properties to specify how a document is rendered by a speech synthesizer.</li><li>Tables Module - describes the layout of tables.</li><li>Text - describes the text related properties.</li><li>Writing Modes - describes the properties that control text direction</li><li>Line grid - describes text where each symbol in a line is aligned to an invisible grid.</li><li>Values and units</li><li>Behavioral extensions to CSS - defines the "binding" property for XBL.</li><li>Flexible Box layout Level 3 - defines the "flex' and "inner-flex" keywords for the display propert</li><li>Image values and replaced content - defines how properties can refer to images by URL.</li><li>Fragmentation Module - describes properties to force or avoid page and column breaks.</li><li>Transforms - defines 2D and 3D transforms.</li><li>Transitions - defines a property to animate the transitions between pseudo-classes.</li><li>Animations - specifies which properties change their values during an animation.</li><li>Mobile profile -</li><li>TV profile</li><li>Conditional Rules - defines a number of ways to make style rules depend on factors outside the document, such as output media, the capabilities of the user agent, and the URL of the document</li><li>Device Adaptation</li><li>Shapes - defines properties to assign a shape to a CSS box, so that the lengths of the lines inside the box are determined by that shape.</li><li>Compositing and blending</li><li>Filter effects - defines graphic filters that can be applied to an element before it has been composited.</li><li>Masking - provides ways to partially or fully hide portions of visual elements.</li><li>Box alignment module - defines properties for alignments.</li><li>Text decoration - defines properties that control the style and position of decorations around text.</li><li>Intrinsic and extrinsic sizing - defines keywords for use on the width and height properties.</li><li>Counter Styles - defines rules to support custom numbering styles.</li><li>Cascading variables - allows arbitrary data to be associated with elements.</li><li>Overflow module - defines property which specifies how text is treated that is too wide or too tall for its box.</li><li>Display module</li><li>Font loading - defines methods to allow a script to explicitly load a font.</li></ol></span>`
},{
  name: 'SCSS',
  description: `SCSS is an extension of CSS that adds power and elegance to the basic language. It allows you to use variables, nested rules, mixins, inline imports, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized, and get small stylesheets up and running quickly, particularly with the help of the Compass style library.<h2 id="Features">Features</h2> <ul> <li>Fully CSS-compatible</li> <li>Language extensions such as variables, nesting, and mixins</li> <li>Many <span class="object_link"><a href="Sass/Script/Functions.html" title="Sass::Script::Functions (module)">useful functions</a></span> for manipulating colors and other values</li> <li>Advanced features like <a href="#control_directives__expressions">control directives</a> for libraries</li> <li>Well-formatted, customizable output</li> </ul>`
},{
  name: 'LESS',
  description: `<p>Less is a CSS pre-processor, meaning that it extends the CSS language, adding features that allow variables, mixins, functions and many other techniques that allow you to make CSS that is more maintainable, themeable and extendable.</p><p>Less runs inside Node, in the browser and inside Rhino. There are also many 3rd party tools that allow you to compile your files and watch for changes. The quickest place for first experiments with Less is our <a href="http://lesscss.org/less-preview/">online editor</a>.</p>`
},{
  name: 'PostCSS',
  description: `PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.`
},{
  name: 'CSS Flexbox',
  description: `<div id="flexbox-background" class="flexbox-info-container active">
  <p>The <code>Flexbox Layout</code> (Flexible Box) module (currently a W3C Last Call Working Draft) aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word "flex").</p>
  <p>The main idea behind the flex layout is to give the container the ability to alter its items' width/height (and order) to best fill the available space (mostly to accommodate to all kind of display devices and screen sizes). A flex container expands items to fill available free space, or shrinks them to prevent overflow.</p>
  <p>Most importantly, the flexbox layout is direction-agnostic as opposed to the regular layouts (block which is vertically-based and inline which is horizontally-based). While those work well for pages, they lack flexibility (no pun intended) to support large or complex applications (especially when it comes to orientation changing, resizing, stretching, shrinking, etc.). </p>
  <p><strong>Note:</strong> Flexbox layout is most appropriate to the components of an application, and small-scale layouts, while the <a href="http://css-tricks.com/snippets/css/complete-guide-grid/">Grid</a> layout is intended for larger scale layouts.
  </p></div>`
},{
  name: 'CSS Grid Layout',
  description: `<div id="grid-introduction" class="flexbox-info-container active">
  <p>CSS Grid Layout (aka "Grid"), is a two-dimensional grid-based layout system that aims to do nothing less than completely change the way we design grid-based user interfaces. CSS has always been used to lay out our web pages, but it's never done a very good job of it. First we used tables, then floats, positioning and inline-block, but all of these methods were essentially hacks and left out a lot of important functionality (vertical centering, for instance). Flexbox helped out, but it's intended for simpler one-dimensional layouts, not complex two-dimensional ones (Flexbox and Grid actually work very well together). Grid is the very first CSS module created specifically to solve the layout problems we've all been hacking our way around for as long as we've been making websites.</p>
  <p>There are two primary things that inspired me to create this guide. The first is Rachel Andrew's awesome book <a href="http://abookapart.com/products/get-ready-for-css-grid-layout">Get Ready for CSS Grid Layout.</a> It's a thorough, clear introduction to Grid and is the basis of this entire article. I <em>highly</em> encourage you to buy it and read it. My other big inspiration is Chris Coyier's <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">A Complete Guide to Flexbox</a>, which has been my go-to resource for everything flexbox. It's helped a ton of people, evident by the fact that it's the top result when you Google "flexbox." You'll notice many similarities between his post and mine, because why not steal from the best?</p>
  <p>My intention with this guide is to present the Grid concepts as they exist in the very latest version of the specification. So I won't be covering the out of date IE syntax, and I'll do my best to update this guide regularly as the spec matures.</p>
  </div>`
},{
  name: 'Bootstrap 3/4',
  description: `<div id="main">
<h2>What is Bootstrap?</h2>
<ul>
<li>Bootstrap is a free front-end framework for faster and easier web development</li>
<li>Bootstrap includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels and many other, as well as optional JavaScript plugins</li>
<li>Bootstrap also gives you the ability to easily create responsive designs</li>
</ul>
<div class="w3-panel w3-note">
<p><b>What is Responsive Web Design?</b><br><br>
Responsive web design is about creating web sites which automatically adjust 
themselves to look good on all devices, from small phones to large desktops.</p>
</div>
<hr>

<h2>Bootstrap History</h2>
<p>Bootstrap was developed by Mark Otto and Jacob Thornton at Twitter, and released as an open source product in August 2011 on GitHub.</p>
<p><strong>In June 2014 Bootstrap was the No.1 project on GitHub!</strong></p>
<hr>

<h2>Why Use Bootstrap?</h2>
<p>Advantages of Bootstrap:</p>
<ul>
<li><strong>Easy to use:</strong> Anybody with just basic knowledge of HTML and CSS can start using Bootstrap</li>
<li><strong>Responsive features:</strong> Bootstrap's responsive CSS adjusts to phones, tablets, and desktops</li>
<li><strong>Mobile-first approach:</strong> In Bootstrap 3, mobile-first styles are part of the core framework</li>
<li><strong>Browser compatibility:</strong> Bootstrap is compatible with all modern browsers (Chrome, Firefox, Internet Explorer, Safari, and Opera)</li>
</ul>
</div>`
},{
  name: 'ZURB Foundation',
  description: `<strong>Foundation has its roots in the ZURB style guide</strong>, a collection of HTML, CSS and Javascript that helped us quickly design amazing websites. It’s now used by millions of designers and developers and powering some of the biggest and most popular sites on the web. Here’s the story of how Foundation became the most advanced responsive front-end framework in the world.`
},{
  name: 'Material Design',
  description: `Develop a single underlying system that allows for a unified experience across platforms and device sizes. Mobile precepts are fundamental, but touch, voice, mouse, and keyboard are all ﬁrst-class input methods.
    <h1><a href="https://material.io/guidelines/#introduction-principles" target="blank">Material Design</a></h1>
  `
},{
  name: 'TypeScript',
  description: `<p>TypeScript is a strongly-typed superset of JavaScript, which means it adds some syntactical benefits to the language while still letting you write normal JavaScript if you want to. It encourages a more declarative style of programming through things like interfaces and static typing (more on these later), offers modules and classes, and most importantly, integrates relatively well with popular JavaScript libraries and code. You could think of it as a strongly static layer over current JavaScript that has a few features to make life (and debugging especially) a bit more bearable.</p><p>The reason it’s gained such attention of late, though, is largely because it’s been selected for full support by the upcoming Angular 2 (which is also written in TypeScript itself). It’s also developed by Microsoft, which means it has the backing of two major tech companies (not a bad place for any language). This means that we’ll probably be seeing a lot more about it in the months and years to come, and it will likely gain even more of a following and mainstream status in that time.</p>`
},{
  name: 'ES6/ES7/ESnext',
  description: `ES6 is the next specification for JavaScript, and it's finally started to appear in a major way in browsers and on servers thanks to Node.js 5.`
},{
  name: 'NPM',
  description: `<div id="page">
  <!--
title: 01 - What is npm?
featured: true
-->
<h1><a id="what-is-npm" class="deep-link" href="#what-is-npm"><svg aria-hidden="true" class="deep-link-icon" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What is npm?</h1>
<p>npm makes it easy for JavaScript developers to share and reuse code, and it makes it easy to update the code that you're sharing.</p>
<hr/>
<p>If you've been working with JavaScript for a while, you might have heard of npm. npm makes it easy for JavaScript developers to share the code that they've created to solve particular problems, and for other developers to reuse that code in their own applications.</p>
<p>Once you're depending on this code from other developers, npm makes it easy to check to see if they've made any updates to it and to download those updates when they're made.</p>
<p>These bits of reusable code are called packages or modules. A package is just a directory with one or more files in it, along with a file called "package.json" that contains metadata about the package. A typical application, such as a website, will depend on dozens or hundreds of packages. These packages are often small; the general idea is that you create a small building block which solves one problem well. This makes it possible for you to compose larger custom solutions out of these small building blocks.</p>
<p>There's lots of benefits to this; it makes it possible for your team to draw on expertise outside of your organization by bringing in packages from people who have focused on particular problem areas. Even if you don't reuse code from people outside of your organization, using this kind of module-based approach can help your team work together better and make it possible to reuse code across projects.</p> 
<p>You can find packages to help you build your application by browsing the npm website. When you're browsing the website, you'll find lots of Node modules. npm started as the Node package manager, so you'll find lots of modules which can be used on the server side. There are also lots of packages which add commands for you to use in the command line. You'll also find packages which can be used on the front end.</p>
<p>npm is made up of three distinct pieces: the website, the registry, and the CLI. The website serves as the primary tool for users to discover packages, the registry is a large database of information about packages, and the CLI is how developers publish their packages on the registry or download packages they wish to install. </p>
<p>npm is a way to reuse code from other developers, and also a way to share your code with them, and it makes it easy to manage the different versions of code.</p>
</div>`
},{
  name: 'Webpack 2.x/3.x',
  description: `test`
},{
  name: 'AngularJs',
  description: `<div ng-hide="loading" ng-include="partialPath" toc-collector="" autoscroll="" class="ng-scope"><a href="https://github.com/angular/angular.js/edit/master/docs/content/guide/introduction.ngdoc?message=docs(guide%2FIntroduction)%3A%20describe%20your%20change..." class="improve-docs btn btn-primary ng-scope"><i class="glyphicon glyphicon-edit">&nbsp;</i>Improve this Doc</a>
  
  
  <h1 id="what-is-angularjs-" class="ng-scope">What Is AngularJS?</h1>
  <p class="ng-scope">AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template
  language and lets you extend HTML's syntax to express your application's components clearly and
  succinctly. AngularJS's data binding and dependency injection eliminate much of the code you
  would otherwise have to write. And it all happens within the browser, making it
  an ideal partner with any server technology.</p>
  <p class="ng-scope">AngularJS is what HTML would have been, had it been designed for applications. HTML is a great
  declarative language for static documents. It does not contain much in the way of creating
  applications, and as a result building web applications is an exercise in <em>what do I have to do
  to trick the browser into doing what I want?</em></p>
  <p class="ng-scope">The impedance mismatch between dynamic applications and static documents is often solved with:</p>
  <ul class="ng-scope">
  <li><strong>a library</strong> - a collection of functions which are useful when writing web apps. Your code is
  in charge and it calls into the library when it sees fit. E.g., <code><span class="pln">jQuery</span></code>.</li>
  <li><strong>frameworks</strong> - a particular implementation of a web application, where your code fills in
  the details. The framework is in charge and it calls into your code when it needs something
  app specific. E.g., <code><span class="pln">durandal</span></code>, <code><span class="pln">ember</span></code>, etc.</li>
  </ul>
  <p class="ng-scope">AngularJS takes another approach. It attempts to minimize the impedance mismatch between document
  centric HTML and what an application needs by creating new HTML constructs. AngularJS teaches the
  browser new syntax through a construct we call <em>directives</em>. Examples include:</p>
  <ul class="ng-scope">
  <li>Data binding, as in <code><span class="pun">{{}}</span></code>.</li>
  <li>DOM control structures for repeating, showing and hiding DOM fragments.</li>
  <li>Support for forms and form validation.</li>
  <li>Attaching new behavior to DOM elements, such as DOM event handling.</li>
  <li>Grouping of HTML into reusable components.</li>
  </ul>
  <h2 id="a-complete-client-side-solution" class="ng-scope">A complete client-side solution</h2>
  <p class="ng-scope">AngularJS is not a single piece in the overall puzzle of building the client-side of a web
  application. It handles all of the DOM and AJAX glue code you once wrote by hand and puts it in a
  well-defined structure. This makes AngularJS opinionated about how a CRUD (Create, Read, Update, Delete)
  application should be built. But while it is opinionated, it also tries to make sure that its opinion
  is just a starting point you can easily change. AngularJS comes with the following out-of-the-box:</p>
  <ul class="ng-scope">
  <li>Everything you need to build a CRUD app in a cohesive set: Data-binding, basic templating
  directives, form validation, routing, deep-linking, reusable components and dependency injection.</li>
  <li>Testability story: Unit-testing, end-to-end testing, mocks and test harnesses.</li>
  <li>Seed application with directory layout and test scripts as a starting point.</li>
  </ul>
  <h2 id="angularjs-s-sweet-spot" class="ng-scope">AngularJS's sweet spot</h2>
  <p class="ng-scope">AngularJS simplifies application development by presenting a higher level of abstraction to the
  developer. Like any abstraction, it comes at a cost of flexibility. In other words, not every app
  is a good fit for AngularJS. AngularJS was built with the CRUD application in mind. Luckily CRUD
  applications represent the majority of web applications. To understand what AngularJS is
  good at, though, it helps to understand when an app is not a good fit for AngularJS.</p>
  <p class="ng-scope">Games and GUI editors are examples of applications with intensive and tricky DOM manipulation.
  These kinds of apps are different from CRUD apps, and as a result are probably not a good fit for AngularJS.
  In these cases it may be better to use a library with a lower level of abstraction, such as <code><span class="pln">jQuery</span></code>.</p>
  <h1 id="the-zen-of-angularjs" class="ng-scope">The Zen of AngularJS</h1>
  <p class="ng-scope">AngularJS is built around the belief that declarative code is better than imperative when it comes
  to building UIs and wiring software components together, while imperative code is excellent for
  expressing business logic.</p>
  <ul class="ng-scope">
  <li>It is a very good idea to decouple DOM manipulation from app logic. This dramatically improves
  the testability of the code.</li>
  <li>It is a really, <em>really</em> good idea to regard app testing as equal in importance to app
  writing. Testing difficulty is dramatically affected by the way the code is structured.</li>
  <li>It is an excellent idea to decouple the client side of an app from the server side. This
  allows development work to progress in parallel, and allows for reuse of both sides.</li>
  <li>It is very helpful indeed if the framework guides developers through the entire journey of
  building an app: From designing the UI, through writing the business logic, to testing.</li>
  <li>It is always good to make common tasks trivial and difficult tasks possible.</li>
  </ul>
  <p class="ng-scope">AngularJS frees you from the following pains:</p>
  <ul class="ng-scope">
  <li><strong>Registering callbacks:</strong> Registering callbacks clutters your code, making it hard to see the
  forest for the trees. Removing common boilerplate code such as callbacks is a good thing. It
  vastly reduces the amount of JavaScript coding <em>you</em> have to do, and it makes it easier to see
  what your application does.</li>
  <li><strong>Manipulating HTML DOM programmatically:</strong> Manipulating HTML DOM is a cornerstone of AJAX
  applications, but it's cumbersome and error-prone. By declaratively describing how the UI
  should change as your application state changes, you are freed from low-level DOM manipulation
  tasks. Most applications written with AngularJS never have to programmatically manipulate the
  DOM, although you can if you want to.</li>
  <li><strong>Marshaling data to and from the UI:</strong> CRUD operations make up the majority of AJAX
  applications' tasks. The flow of marshaling data from the server to an internal object to an HTML
  form, allowing users to modify the form, validating the form, displaying validation errors,
  returning to an internal model, and then back to the server, creates a lot of boilerplate
  code. AngularJS eliminates almost all of this boilerplate, leaving code that describes the
  overall flow of the application rather than all of the implementation details.</li>
  <li><strong>Writing tons of initialization code just to get started:</strong> Typically you need to write a lot
  of plumbing just to get a basic "Hello World" AJAX app working. With AngularJS you can bootstrap
  your app easily using services, which are auto-injected into your application in a
  <a href="https://github.com/google/guice">Guice</a>-like dependency-injection style. This allows you
  to get started developing features quickly. As a bonus, you get full control over the
  initialization process in automated tests.</li>
  </ul>
  
  
  </div>`
},{
  name: 'Angular, Angular 2, Angular x.x',
  description: `test`
},{
  name: 'Vue.js',
  description: `test`
},{
  name: 'D3.js',
  description: `test`
},{
  name: 'SPA',
  description: `<div class="mv-guide">
  <div class="mbm">
  <img class="mv-guide-badge" width="169.0" src="/assets/custom/beginners-guide/badge-single-page-applications-955506d7ed6bfc348e8c930f0dbb9fa8ddda72e8e849c94dd58a2090a56c4175.svg" alt="Badge single page applications">
  </div>
  <div class="mbl tac">
  <h1 class="h h--1 ts48px--m th115 twb">Single-page Applications</h1>
  <p class="mbf tcs tss">
  <i class="icn icn--clock"></i>
  7 minute read
  </p>
  </div>
  <div class="mv-guide-content">
  <p>The term “single-page application” (or SPA) is usually used to describe applications that were built for the web. These applications are accessed via a web browser like other websites, but offer more dynamic interactions resembling native mobile and desktop apps.</p>
  
  <p>The most notable difference between a regular website and an SPA is the reduced amount of page refreshes. SPAs have a heavier usage of AJAX — a way to communicate with back-end servers without doing a full page refresh — to get data loaded into our application. As a result, the process of rendering pages happens mostly on the client-side.</p>
  
  <h2>Single-page App Cons</h2>
  
  <p>While building SPAs is trendy and considered a modern development practice, it’s important to be aware of its cons, including:</p>
  
  <ul>
  <li>The browser does most of the heavy lifting, which means performance can be a problem — especially on less capable mobile devices.</li>
  <li>Careful thought must be put into search engine optimization (SEO) so your content can be discoverable by search engines and social media websites that provide a link preview.</li>
  </ul>
  
  <h3>Mitigating Cons With Server-side Rendering</h3>
  
  <p>Most modern JavaScript frameworks are working on ways to handle server-side rendering of SPAs — meaning the user would get a fully populated page when the SPA is loaded for the first time, instead of, for example, seeing a loading indicator.</p>
  
  <p>Server-side rendering can alleviate some of the burden browsers have to go through when rendering pages, and will also help with the problem of SEO and content discoverability.</p>
  
  <h2>Popular JavaScript Frameworks for Building SPAs</h2>
  
  <p>The more interactivity that happens on the client-side, the more JavaScript code is needed to make those interactive pieces function well. And the more code is written, the more important it is to have a clean and well-architected codebase. And this is exactly the problem JavaScript frameworks help solve — each with its own approach.</p>
  
  <p>There are a lot of open source JavaScript frameworks that help with building SPAs, such as:</p>
  
  <ul>
  <li><a href="https://angular.io/">Angular</a></li>
  <li><a href="https://facebook.github.io/react/">React</a></li>
  <li><a href="http://emberjs.com/">Ember</a></li>
  <li><a href="http://aurelia.io/">Aurelia</a></li>
  <li><a href="https://vuejs.org/">Vue.js</a></li>
  <li><a href="http://cycle.js.org/">Cycle.js</a></li>
  <li><a href="http://backbonejs.org/">Backbone</a></li>
  </ul>
  
  <p>The list could go on and on — but let’s dive a bit more into the first two here: Angular and React.</p>
  
  <h2>Angular</h2>
  
  <p>Angular is a front-end framework built to ease the burden of writing complex apps while keeping everything testable and organized. The first version of Angular was created back in 2009, and it was way ahead of its time. When Angular was first written, it solved a lot of problems that have now been fixed at the JavaScript language level with the release of ES2015. While Angular 1 had to create its own solution for modules, for instance, ES2015 now provides a solution to JavaScript modules right at the language level.</p>
  
  <p>With inadequacies like this in mind, the Angular team at Google rewrote the framework from scratch. The new and improved version of Angular (known as Angular 2) is very promising. Angular’s overall proposition has not changed: It provides a holistic solution to writing apps. Built right into the framework is a way to do application routing, communicating with web servers, and more. You won’t need any extra packages to get a basic but fully functioning web app up and running.</p>
  
  <p>Angular also provides a whole ecosystem (<a href="https://cli.angular.io/">Angular CLI</a>) for actually building apps that includes a tool to scaffold applications, as well as a solution for building mobile web apps with performance in mind as a first-class citizen (<a href="https://mobile.angular.io/">Angular Mobile</a>).</p>
  
  <h2>React</h2>
  
  <p>React is not considered a framework, per se — rather, it touts itself as a view library. But don’t let that fool you, as React was built to solve user interface problems at a very large scale.</p>
  
  <p>React was pretty disruptive when it was first announced. The idea of “Rethinking Best Practices” was attached to it with good reason — React’s proposition was very different than the trends the rest of the JavaScript community was moving toward at the time. While other framework authors were focusing on applying the MVC pattern to writing apps and having a clear separation of code associated to the view and other parts of the application, React proposed coupling those together and simplifying the code by means of composition and other functional paradigms through components.</p>
  
  <p>In the time since React was released, other popular frameworks, such as Angular and Ember, have also moved toward a more component-based architecture, as well as applied similar ideas React brought to light, such as the virtual DOM, which is how React applies changes to the view.</p>
  
  <p>React’s overall approach to building apps is different than Angular and Ember because it is just a view library — it does not provide a way to do client-side routing or even a way to load data from a back-end server bundled with the library. This means that to get a simple yet fully functioning app (that needs these missing features) to work, you will need to look into other libraries that are not maintained by the same Facebook core team that maintains React.</p>
  
  <p>Don’t be intimidated by the idea of relying on outside libraries, though. There are many popular community-backed libraries that have even been adopted by teams inside of Facebook, including <a href="https://github.com/reactjs/react-router">react-router</a>, which provides a way to client-side routing; <a href="https://github.com/mzabriskie/axios">axios</a>, which has a system to make AJAX calls that easily integrate into React apps; and <a href="http://redux.js.org/">redux</a>, which is a state container that helps developers handle the flow of data in React apps.</p>
  
  <h2>Finding the Right Framework for You</h2>
  
  <p>There are ongoing flame wars online about which is the best framework for building apps. Indeed, each has its own strengths and weaknesses, which we will not get into in this chapter. They all, however, have one thing in common: JavaScript.</p>
  
  <p>And that’s what we recommend: Learn JavaScript and its modern ecosystem well. Adopt <a href="https://nodejs.org/en/">Node.js</a>, even for your client-side development, as it will bring a lot of good tooling to help <a href="https://webpack.github.io/">bundle your code</a>, run <a href="http://eslint.org/">linters</a> to avoid common syntax mistakes, <a href="https://mochajs.org/">run unit tests</a>, and more. Once you’ve adopted Node.js, be sure to bring all your dependencies in through <a href="https://www.npmjs.com/">NPM</a>, including your CSS dependencies, such as <a href="http://fontawesome.io/">Font Awesome</a>, <a href="http://getbootstrap.com/">Twitter Bootstrap</a>, etc. Adopt <a href="https://www.codeschool.com/courses/es2015-the-shape-of-javascript-to-come">ES2015</a> (also known as ES6) and all its latest features through <a href="https://babeljs.io/">Babel</a>, which transpiles ES6 code back to ES5 JavaScript code that browsers can understand, since they haven’t been fully upgraded to support the latest features of JavaScript yet. Also, if you are a fan of strict typed languages, then be sure to look into <a href="https://github.com/facebook/flow">Flow</a> and/or <a href="https://www.typescriptlang.org/">TypeScript</a>.</p>
  
  <p>Once you’ve gotten a hang of tooling and the JavaScript ecosystem, and have identified which parts you like the most, pick a framework that fits your choice. Ultimately, the each framework’s goal is the same: building an awesome app. So it will be up to you to figure out if you want, for example, a more object-oriented or a more functional approach when building apps.</p>
  
  <p>You’ll also have to decide how much control you want over your application’s architecture. If you want to make most of the architecture decisions yourself, then you might be more interested in bringing different libraries together, which is more compatible with how React works. But if you prefer to have most decisions made for you, and you’re okay with giving up a bit of flexibility, then maybe Angular or Ember will be the best choice, as they both provide more opinionated ways of writing your app right out of the box.</p>
  
  <p>Ultimately, there is no wrong or right answer when choosing your JavaScript framework and tooling of choice, so it is up to you to figure out what works best in your situation, depending on your level of experience, how much flexibility your job provides, how much code is already written, and other factors.</p>
  
  </div>
  <div class="mtl">
  <ul class="list iconList tac">
  <li class="iconList-item iconList-item--label">Share on:</li>
  <li class="iconList-item" data-share-hashtags="" data-share-service="twitter" data-share-text="Single-page Applications by @codeschool">
  <a class="iconList-item-link js-share" data-segment-click="User Share" data-segment-properties="{&quot;service&quot;:&quot;Twitter&quot;}" href="https://www.codeschool.com/beginners-guide-to-web-development/single-page-applications"><b class="srt">Twitter</b>
  <i class="icn icn--twitter iconList-item-icn"></i>
  </a></li>
  <li class="iconList-item" data-share-service="facebook">
  <a class="iconList-item-link js-share" data-segment-click="User Share" data-segment-properties="{&quot;service&quot;:&quot;Facebook&quot;}" href="https://www.codeschool.com/beginners-guide-to-web-development/single-page-applications"><b class="srt">Facebook</b>
  <i class="icn icn--facebook iconList-item-icn"></i>
  </a></li>
  </ul>
  
  </div>
  </div>`
},{
  name: 'React/Redux',
  description: `test`
},{
  name: 'Angular/Redux',
  description: `test`
},{
  name: 'Jasmine',
  description: `test`
},{
  name: 'Karma',
  description: `<div class="container">
  <div class="sixteen columns bottom">
    <p class="bold large center">Things should be simple. We believe in testing and so we want to make it as simple as possible.</p>
  </div>
  <div class="sixteen columns bottom">
    <p class="center"></p><p>The main goal for Karma is to bring a productive testing
environment to developers. The environment being one where they don't have
to set up loads of configurations, but rather a place where developers can just write the
code and get instant feedback from their tests. Because getting quick feedback is what makes you
productive and <a href="http://vimeo.com/36579366">creative</a>.</p>

    <p></p>
  </div>
  <div class="clearfix"></div>
  <div class="our-services">
    <ul>
      <li class="one-third column">
        <div class="icon-box"><i class="icon-mobile-phone icon-2x"></i></div>
        <h3>Test on Real Devices</h3>
        <p>
          Test your code on real browsers and real devices such as phones,
          tablets or on a headless PhantomJS instance.
        </p>
      </li>
      <li class="one-third column">
        <div class="icon-box"><i class="icon-resize-small icon-2x"></i></div>
        <h3>Remote Control</h3>
        <p>
          Control the whole workflow from the command line or your IDE -
          just save a file and Karma will run all the tests.
        </p>
      </li>
      <li class="one-third column">
        <div class="icon-box"><i class="icon-globe icon-2x"></i></div>
        <h3>Testing Framework Agnostic</h3>
        <p></p><p>Describe your tests with <a href="http://jasmine.github.io/">Jasmine</a>,
<a href="http://mochajs.org/">Mocha</a>,
<a href="http://qunitjs.com/">QUnit</a>, or write a simple adapter for any framework you like.</p>

        <p></p>
      </li>
      <li class="one-third column last">
        <div class="icon-box"><i class="icon-group icon-2x"></i></div>
        <h3>Open Source</h3>
        <p></p><p>Developed for and maintained by the open source community at <a href="https://github.com/karma-runner/karma">GitHub</a>.</p>

        <p></p>
      </li>
      <li class="one-third column last">
        <div class="icon-box"><i class="icon-magic icon-2x"></i></div>
        <h3>Easy Debugging</h3>
        <p>Easy debugging directly from your IDE via WebStorm or Google Chrome.</p>
      </li>
      <li class="one-third column last">
        <div class="icon-box"><i class="icon-refresh icon-2x"></i></div>
        <h3>Continuous Integration</h3>
        <p></p><p>Simple integration with <a href="plus/jenkins.html">Jenkins</a>,
<a href="plus/travis.html">Travis</a> or
<a href="plus/semaphore.html">Semaphore</a>.</p>

        <p></p>
      </li>
    </ul>
  </div>
</div>`
},{
  name: 'Jest',
  description: `test`
},{
  name: 'Mocha',
  description: `Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases`
},{
  name: 'Enzyme',
  description: `Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.`
},{
  name: 'phantom.js',
  description: `test`
},{
  name: 'webdriver.io',
  description: `test`
},{
  name: 'Express.js',
  description: `test`
},{
  name: 'REST API',
  description: `test`
},{
  name: 'Docker',
  description: `test`
},{
  name: 'MongoDB',
  description: `test`
},{
  name: 'ChromeDevTools',
  description: `test`
},{
  name: 'Visual Studio Code',
  description: `test`
},{
  name: 'Webstorm',
  description: `test`
},{
  name: 'Git',
  description: `test`
},{
  name: 'Server Side Rendering',
  description: `test`
}]