// import Welcome from "./components/Welcome"
// import Clock from "./components/Clock"
// import LoginControl from "./components/LoginControl"
// import Mailbox from "./components/Mailbox"
// import Page from "./components/Page"
// import List from "./components/List"
// import Blog from "./components/Blog"
// import NameForm from "./components/NameForm"
// import EssayForm from "./components/EssayForm"
// import FlavorForm from "./components/FlavorForm"
// import Calculator from "./components/Calculator"
// import WelcomeDialog from "./components/WelcomeDialog"
import SignUpDialog from "./components/SignUpDialog"

// const messages = ["React", "Vue", "Angular"]
// const posts = [
//   { id: 1, title: "Hello World", content: "Welcome to learning React!" },
//   { id: 2, title: "Installation", content: "You can install React from npm." },
// ]

export default function App() {
  return (
    <div>
      {/* <LoginControl isLoggedIn={false} />
      <Mailbox unreadMessages={messages} />
      <Page />
      <Clock />
      <List items={messages} />
      <Blog posts={posts} />
      <NameForm />
      <EssayForm /> */}
      {/* <FlavorForm /> */}
      {/* <Calculator /> */}
      {/* <WelcomeDialog /> */}
      <SignUpDialog />
    </div>
  )
}
