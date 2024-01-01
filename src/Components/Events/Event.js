import React from 'react';
import "./Event.css";
import Card from './card/Card';
export default function Event() {
  return (
    <div className='event-body'>
    <h1 className='event-title'>PAST EVENTS</h1>
    <div className='card-container'>
      <Card img="https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"title="Event 1" subtitle="subtitle" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
/>
      <Card img="https://starwalk.space/gallery/images/what-is-space/1920x1080.jpg" title="Event 2" subtitle="subtitle" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"/>
      <Card img="https://www.pbs.org/wgbh/nova/media/original_images/JWST_hero.jpg" title="Event 3" subtitle="subtitle" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"/>
    </div>
    </div>
  )
}
