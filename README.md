# MyEvents

- **Creators:** Cindy Wong, Karen Fernander, Rene Santiago, Alexei Rusu
- **Description:** 
“MyEvents” is a frontend React application that allows users to view, create, delete, and update events. The app features user authentication, ensuring that only authorized users can access and manipulate event information. The user interface is intuitive and easy to navigate, allowing users to quickly and efficiently manage their events. Additionally, the application integrates with a backend service to securely store and retrieve event data. Overall, “MyEvents” is a powerful and user-friendly tool for managing events and keeping track of important dates and deadlines.
- **technologies used**:
  * React
  * react-router-dom
  * sass

## Component Architecture

```mermaid
flowchart TD

    App --> Header
    App --> Outlet
    App --> Footer
    Header --> Nav
    Nav --> id1[Home Link]
    Nav --> id2[About Link]
    Nav --> id3[Login Link]
    Outlet --> id4["/"] --> Index
    Outlet --> id5["/events/:id"] --> Show
    Outlet --> id6["/create"] --> eventCreateAction
    Outlet --> id7["/update/:id"] --> eventUpdateAction
    Outlet --> id8["/delete/:id"] --> eventDeleteAction
```


### Frontend Route Table
|    Route    | Element |    Loader   |       Action      |              Description                     |
|-------------|---------|-------------|-------------------|----------------------------------------------|
|      /      |  Index  | indexLoader |                   | Loads up list of events                      |
| /event/:id  |  Show   | eventLoader |                   | Loads up a specific event                    |
|   /create   |  Create |             | eventCreateAction | Handles submission of create form for events |
| /update/:id |  Update |             | eventUpdateAction | Handles submission of update form for events |
| /delete/:id |  Delete |             | eventDeleteAction | Handles submission of delete form for events |



## Mockups


### Desktop Mockup

![Desktop Mockup](https://i.imgur.com/hQndwos.png)
![](https://i.imgur.com/WPs5ZUr.png)
![](https://i.imgur.com/l5c6DNc.png)

### Mobile Mockup



![Mobile Mockup](https://i.imgur.com/hxYm9PP.png)  ![](https://i.imgur.com/TZpnHYB.png)

* [Deployed Website](https://myevents-s.netlify.app/) 