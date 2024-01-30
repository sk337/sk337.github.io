import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import sword from "@/swordlogo.png";

function App() {
  function toggleTheme() {}
  return (
    <main className="flex items-center justify-center font-sans">
      <div className="w-80">
        <p className="text-center font-bold text-3xl p-5">Profolio</p>
        <p className="text-center">
          Hello, I am Skeet and I am a Javascript Developer that uses React,
          Tailwindcss, and shadcn for components. I also make random stuff in
          python every now and then
        </p>
        <p className="text-center text-2xl font-bold p-5">Projects</p>
        <a href="https://swordmanager.pk3.zip">
          <Card className="mb-5">
            <CardHeader>
              <CardTitle>SwordManager</CardTitle>
              <CardDescription>
                100% client sided Sword Battle account management tool written
                with react
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img src={sword}></img>
            </CardContent>
            <CardFooter>
              <a
                href="https://github.com/sk337/SwordManager"
                className="underline"
              >
                GitHub
              </a>
            </CardFooter>
          </Card>
        </a>
        <a href="https://www.pk3.zip">
          <Card className="mb-5">
            <CardHeader>
              <CardTitle>Portfolio</CardTitle>
              <CardDescription>
                My portfolio website made in react and vite
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Avatar className="w-full h-full">
                <AvatarImage src="https://github.com/sk337.png" />
                <AvatarFallback>s7</AvatarFallback>
              </Avatar>
            </CardContent>
            <CardFooter>
              <a
                className="underline"
                href="https://github.com/sk337/sk337.github.io"
              >
                GitHub
              </a>
            </CardFooter>
          </Card>
        </a>
        <p className="text-center text-2xl font-bold p-5">Contact</p>
        <p className="text-center">
          GitHub:{" "}
          <a href="https://github.com/sk337" className="underline">
            sk337
          </a>
          <br />
          Replit:{" "}
          <a href="https://replit.com/@1gn" className="underline">
            @1gn
          </a>
          <br />
          Email: Soon
        </p>
      </div>
    </main>
  );
}

export default App;
