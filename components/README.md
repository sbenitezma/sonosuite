# COMPONENTS

This directory contains all generic required components for application.

Generic components created for application are:
- Navigation
- Item
- DetailList
- BrandCard
- AvatarList
- OrderedList
- MusicNav

###Navigation
Navigation is component formed by:
- Navigation Drawer formed by Brand Logo and Sidebar Menu information
- Toolbar navigation (For mobile and small devices)
##
###Item
Component used for a single page item (album or song) formed by:
- Item title
- Item subtitle
- Item artists (singers)
- Release type (song, album, etc)
- Item description
##
###DetailList
Component formed by v-card component that shows a list of items based in:
- Title of description
- Value of description

##
###BrandCard
Component formed by v-card component based in:
- Logo (brand) information
- List of name and value elements

##
###AvatarList
Component formed by v-list component that shows a list of items based in:
- Avatar item (with optional highlight icon)
- Name and description of avatar item

##
###OrderedList
Component formed v-list component that shows a list of items (songs mainly) based in:
- Id Number
- Title
- Artists related
- Duration
- Icon action

On click on every row there's an active action that displays a music navigation bar
##
###MusicNav
Component formed v-bottom-nav component that shows a music player based on list item (song) selected. Is formed by:
- Cover image
- Song name
- Artists related
##
The components directory contains your Vue.js Components.

_Nuxt.js doesn't supercharge these components._
