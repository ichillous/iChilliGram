# instagram.github.io
# INSTAGRAM CLONE <!-- omit in toc -->

> The following README contains information regarding the layout of this instagram clone. 
>


- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

 <!-- omit in toc -->

> This is a full CRUD  instagram clone that allows users to post img links to the app, comment on, update and delete images. 


- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**INSTAGRAM clone** is a nearly identical and fully functional instagram app. Users are able to post images and edit captions. They are able to like and comment as well.  


<br>

## MVP

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The **INSTAGRAM clone** MVP will be able to perform full crud on user photos. 

<br>

### Goals

- _Posting pictures._
- _Being able to comment on pictures._
- _Being able to edit photo comments._
- _Users will be able to add username to comments._
f
<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Housing all app components._ |
| React SemanticUI | _Styling of site._ |
|     Express      | _Adding functionality to buttons._ |
|  Ruby on Rails  | _Backend server._ |

<br>

### Client (Front End)

#### Wireframes

> Below are all the wireframes. 

[Desktop View](https://imgur.com/a/7qDTlGy)

- Desktop Landing

[Dummy Link](https://imgur.com/a/7qDTlGy)

- Desktop Hero

[ERD](https://imgur.com/a/E05CEVo)

- ERD flow chart

[Component Tree](https://imgur.com/a/oI5pyIn)

- Component tree information

[Tablet View](https://imgur.com/a/ICNyci0)

- Tablet Resource Index

[Mobile View](https://imgur.com/a/hnakCqa)

- Mobile Resource Index

#### Component Tree

> 

#### Component Hierarchy

> This is what the component hierarchy will resemble. All components will have their own css file 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Post.jsx
      |__ Update.jsx
      |__ Delete.jsx
      |__ NewPost.jsx
      |__ Comments.jsx
      |__ Likes.jsx
|__ services/
      |__apiConfig.js
      |__posts.js
__ screens/
      |__home
      |__post
      |__postdetail
      |__comments

```

#### Component Breakdown

> These are the components listed in the app.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation, logo, search bar, messages and profile picture._               |
|  Navigation  | functional |   n   |   n   | _The navigation allow users to explore more content(Post-MVP)._       |
|   Post    |   class    |   y   |   y   | _The post will render the posts using cards in flexbox._      |
| Comments | functional |   y  |   y   | _The comments will render within post._                 |
| NewComment | functional |   y  |   y   | _The comments will create new comment and render a small form._
|    Likes    | functional |   y  |   y   | _The likes component will add likes and render them on specific post._ |

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| RUBY setup |    H     |     7 hrs      |      hrs     |     TBD     |
| Add Image and title Form    |   H     |     3 hrs      |      hrs     |     TBD   |
| Create CRUD Actions |    H     |     20 hrs      |      hrs     |     TBD     |
| CSS styling |    H     |     10 hrs      |      hrs     |     TBD     |
| TOTAL               |          |     40 hrs      |      hrs     |     TBD     |

> _I am certain this will take longer than I expect it to in regards to ruby, I will start on that._

<br>

### Server (Back End)

#### ERD Model

> https://whimsical.com/Md3iZDydtDGsENZWYPL5nk .

<br>

***

## Post-MVP

> Post MVP will include, user account creation/deletion as well as adding searchbar functionality. 

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.# PROJECT 4 README <!-- omit in toc -->

