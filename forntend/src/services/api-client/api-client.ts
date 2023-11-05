import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZjOTQyZjcyNDVhYjFmNzFhYmMzN2UiLCJmdWxsbmFtZSI6IkFzZW0gQWxmb3FoYSIsImVtYWlsIjoiYXNlbUBtaXUuZWR1IiwiaWF0IjoxNjk4OTU3ODMxfQ.axNARkPlAJHj84H8sEQEyx5JKUorOywlfJGA_zN7jUI",
  },
});
