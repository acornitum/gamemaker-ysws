import logo from './logo.svg';
import './App.css';
import './output.css';

export default function App() {
  return (
    <div className="">

      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-6xl mb-2">Gamemaker Tutorial</p>
        <p className="text-2xl">the basics of how to use Gamemaker: an engine for making 2d games</p>
      </div>

      <div className="mx-4 md:mx-12 lg:mx-24 xl:mx-72 gap-8">

        <div className="border-dashed border-pink-400 border-4 p-8">
          <p>a quick(?) preface:</p>
          <p>3 days ago, Max (@msw) told me about a potential Gamemaker workshop we could run at Counterspell. Never having used Gamemaker before (but having tried out other game engines), I decided this would be a fun challenge to take on. </p>
          <p>After spending the past few days entirely in Gamemaker, I think that it’s fairly intuitive to learn. IMO, it’s way easier than Unity. I think movement + collision setup for any 2D platformer/top-down game will be easier in Godot? But Gamemaker is easy to catch on. The UI/UX is a little iffy to use on small screens but otherwise the layouts are easy to use.</p>
          <p className="font-bold">This is a workshop meant for those who have never used Gamemaker before.</p>
          <p>Now, there are plenty of tutorials online on how to make specific games. I’ll be trying to teach the logic of how to use Gamemaker, as a basepoint, that you can build upon yourself, rather than make a complete game in this tutorial.</p>
          <p>If you do want to follow a complete game tutorial, I’d suggest following this one, officially by Gamemaker: <a href="https://gamemaker.io/en/tutorials/space-rocks-gml" target="_blank" rel="noopenner noreferrer" className="link">Space Rocks | GML</a>. However, even if you are going to follow that, reading this guide first might still make using Gamemaker more intuitive.</p>
        </div>


        <div className="mt-8">
          <p className="text-3xl">let's start with where everything is located within Gamemaker</p>
          <p>When you first create a game from scratch, you'll end up in a place like this:</p>
          <p>INSERT SCREENSHOT</p>
          <p>On the very left, you have the <i>Inspector</i>: this is where you can change the specifics of the <i>assets</i> you create. For example, the layers in your rooms, the specifications of your sprite.</p>
          <p>On the very right, you have your <i>Assets</i>: this is everything within your game, on a broad scale! You can see folders of all your sprites, objects, rooms—everything. You can think of them as puzzle pieces. Beside the asset tab, there’s also a tab that says room editor—when you place your tiles in your rooms, that’s where the tile map will show up. That’s not relevant for now.</p>
          <p>In the middle, the UI is set up so that you have windows within windows. The window you land on defaults to being called <i>Workspace_1</i>. Whenever you create a sprite or object or anything else, boxes to define those will appear within that window! Whenever you want to edit specific things (ie: art for sprites, tile mappings for rooms) within one of those, a new tab dedicated to that asset will be used. More on that later!</p>
        </div>

        <div className="">
          <p className="text-3xl">so uh, could we actually get started with making the game?</p>
          <p>The first thing we’ll create is a <i>Sprite</i>. In Gamemaker, sprites are the art things within your game—for example, you’ll need to make a player sprite, an enemy sprite, and so on!</p>
          <p>Let's make a player sprite first.</p>
          <p>Right click anywhere in the workspace, hover over <i>Assets</i>, then click on <i>Create Sprite</i>. <span className="thought">((Alternatively, Option+S also works.))</span></p>
          <p>A sprite box should appear!</p>
          <p>Firstly, change the name of the sprite. <span className="thought">((The naming convention I like using for Gamemaker is “[first letter of asset type][name]”.))</span> We’re going to call what we just made <i>sPlayer</i>. <span className="thought">((Other naming conventions include: spr_player, s_player, etc—naming conventions just make things easier to keep track of!))</span></p>
          <p>If <i>sPlayer</i> isn’t already in the Sprites folder on the right Asset Browser, drag it there!</p>
          <p>Now, we’re going to draw the sprite within Gamemaker’s own sprite editor. Click on edit image and a new tab should appear. Here, you can draw what your heart desires your player to look like. After you’re done, go back to Workspace 1, and your newly drawn sprite should appear! <span className="thought">((Alternatively, you can import an image to be your sprite—click on import to do so. <a href="https://github.com/aseprite/aseprite" className="link" target="_blank" rel="noopenner noreferrer">Aesprite</a>/<a href="https://libresprite.github.io/#!/downloads" className="link" target="_blank" rel="noopenner noreferrer">Libresprite</a> is what I recommend for pixel art!))</span></p>
        </div>

        <div>
          <p className="text-3xl">yippee!!</p>
          <p>Next, we'll be making the player as an <i>Object</i> for the player.</p>
          <p>In Gamemaker, the object “wears” the sprite. The object contains the logic of the entity. It determines things like what happens when a key is pressed, what happens when that object collides with another object, and anything else you code onto it! The object is also what’s going to get dragged into <i>rooms</i> later on.</p>
          <p>Like creating a sprite, right click anywhere, hover over <i>Assets</i>, then click on <i>Create Object</i>. <span className="thought">((Alternatively, Option+O also works.))</span></p>
          <p>Now, rename the object! Following the previous naming convention, I’m going to call it <i>oPlayer</i>.</p>
          <p>Next, we’ll need to add the sprite to the object. Click on <i>No sprite</i> and choose the sprite you just made for the player!</p>
          <p>Congrats! You just made an object that looks! </p>
        </div>

        <div>
          <p className="text-3xl">making the game <i>play</i></p>
          <p>Right now, if you try running the game, a blank black screen will show up—how do we get the player to be visible in the room?</p>
          <p>Gamemaker automatically creates your first room for you. Go to the Assets page on the right and click on <i>Room_1</i>, and a new tab with it should appear. Here, we'll be editing what appears in the room!</p>
          <p>In this tutorial, we'll go over two things: how to add the player, and how to add tiles into the background.</p>
          <p>In order to get the player on screen, simply drag <i>oPlayer</i> to the middle of the grid, from the Asset Browser. Be careful that you're dragging the object and not the sprite! Also, make sure you're dropping it onto the <i>Instances</i> layer on the left inspector.</p>
        </div>
        
      </div>

      <div className="bg-blue-200 p-8 w-full flex flex-col justify-center items-center text-center mt-10">
        <h6>guide + site made by <a href="https://github.com/acornitum" className="link" target="_blank" rel="noopenner noreferrer">@acon</a></h6>
        <h6>want free stickers? check out <a href="https://anchor.hackclub.com" className="link" target="_blank" rel="noopenner noreferrer">anchor</a>!</h6>
      </div>


    </div>
  );
}