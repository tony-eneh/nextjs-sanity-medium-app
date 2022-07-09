import { Component } from 'react';
import Image from 'next/image';

export default class Banner extends Component {
  render() {
    return (
      <div className="flex items-center justify-between font-serif px-5 py-28 bg-yellow-300 border-y border-black">
        <div className="space-y-5">
          <h1 className="text-5xl">
            <span className="underline">Medium</span> is a place to write, read,
            and connect
          </h1>
          <h2>
            It's easy and free to post your thinking in any topic and connect
            with millions of readers
          </h2>
        </div>
        <div className="hidden md:block w-20 lg:w-60 mx-5">
          <img src="https://cdn.cdnlogo.com/logos/m/75/medium.svg" alt="logo" />
        </div>
      </div>
    );
  }
}
