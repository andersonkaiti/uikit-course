import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
} from '@andersonkaiti/uikit'

export function App() {
  return (
    <div className="bg-primary">
      <Button>Hello, JStack!</Button>

      <Avatar>
        <AvatarImage src="http://github.com/andersonkaiti.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}
