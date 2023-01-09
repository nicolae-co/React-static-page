
// function MainContent() {
//     return (
//         <div>
//             <h1>Main Content</h1>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Necessitatibus quibusdam et sequi perferendis possimus
//                 quo commodi, rerum eveniet temporibus quisquam.
//             </p>
//         </div>
//     )
// }

// ReactDOM.render(
//     <div>
//         <MainContent />
//     </div>,
//     document.getElementById("root")
// )



// const root = document.getElementById("root")
// const h1 = document.createElement("h1")
// h1.textContent = "Vanilla JS"
// h1.classList.add("header")
// root.appendChild(h1)



//JSX

// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>Some text!</p>
//     </div>
// )

// ReactDOM.render(page, document.getElementById("root"))



const navbar = (
    <nav>
        <h1>Adelida</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"))
