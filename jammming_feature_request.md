<h1 align="center">Jammming RFE: Shortcut keys</p>
<h3 align="center">March 13th 2018</p>

<h4>TARGETED AUDIENCE:</h4> &nbsp;&nbsp;&nbsp;&nbsp; Non-technical to semi-technical management

<h5>OBJECTIVE</h5>
&nbsp;&nbsp;&nbsp;&nbsp;Add shortcut keys or simple key presses for increasing efficiency of our jammming application.

<h5>BACKGROUND</h5>
&nbsp;&nbsp;&nbsp;&nbsp; In my experience simple key presses and key combinations help complete work in a shorter period of time.  Manual interaction with the mouse increases transaction turnaround time by a couple of seconds.

A couple of ideas to increasing efficiency would be:  
 - Pressing the enter key to submit their query to Spotify
 - Upon pressing enter they could use Shift plus Enter to add it to the top of their playlist.
 - Ctrl + S or Command + S to save the playlist
 - Search for an existing playlist that would lower the case possibly eliminate special characters and spaces or tabs to find the match against existing playlists

<h5>TECHNICAL DESIGN</h5>  
In an unordered list to help this display correctly in github:  
 - Enter Key and/or Shift Key + Enter:  Upon first seeing our application the user will jump to the existing SearchBar component due to no presented information upon first visit.  No additional requirements would need to be fulfilled.  Initial proposal would be to interact with the user to look for these key presses while inside of this component.  
 - Search for an existing playlist:  This would need some refactoring to include ether a search button that would bind with a function that could return a possible finding.  The feedback would need some error message if nothing was found.  The requester of this feature would like to see this a error message in the TrackList component versus and alert.  
 - Saving playlist upon shortcut key of Ctrl+S or Command+S:  A feature like this would need to think about how multiple OSs (operation systems) interact with the web browser.  Using the “command” key in macOS/OSX is usually a OS level interaction with the application.   Ctrl is probably a more normal interaction with Windows and Linux OSs.

<h5>CAVEATS</h5>
&nbsp;&nbsp;&nbsp;&nbsp; Confusion sets in for many users that are accustomed to keyboard + mouse interactions.  The feature would need to include a “first time” informational pop up with possibly some ‘info’ icon to help encourage people to interact with the application with shortcut keys.  Adding these increases client side R/D and ultimately more money with our fictional startup.  It would be worth considering an added library to analyze (watch) our customer interactions to see if this would be a feature beneficial to the end users.  The outcome of a heat map may make presentation to non-technical executive-type of decision makers helpful.
