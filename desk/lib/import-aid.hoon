::  import-aid: aides for delaying & kicking backup imports
::
/+  transform
|%
+$  pimp        ::  pending import state
  %-  unit      ::  nothing to do, or:
  %+  each  ~   ::  import whenever we get the data
  egg-any:gall  ::  or we have the data, and are waiting for the go-ahead
::
++  order
  ^-  (jug dude:gall dude:gall)
  %-  my
  :~  [%activity (sy %channels-server ~)]
      [%channels-server (sy %channels ~)]
      [%channels (sy %groups ~)]
  ==
::
++  prod-next
  |=  [our=ship here=dude:gall]
  ^-  (list old-card:transform)
  ~&  [%prodding-next as=here next=~(tap in (~(gut by order) here ~))]
  %+  turn
    ~(tap in (~(gut by order) here ~))
  (cury prod our)
::
++  prod
  |=  [our=ship =dude:gall]
  ^-  old-card:transform
  [%pass /pimp %agent [our dude] %poke %noun !>(%pimp-ready)]
--
