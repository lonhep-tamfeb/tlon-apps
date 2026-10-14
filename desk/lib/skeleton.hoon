::  Similar to default-agent except crashes everywhere
/+  transform
^-  old-agent:transform
|_  bowl:gall
++  on-init
  ^-  (quip old-card:transform old-agent:transform)
  !!
::
++  on-save
  ^-  vase
  !!
::
++  on-load
  |~  old-state=vase
  ^-  (quip old-card:transform old-agent:transform)
  !!
::
++  on-poke
  |~  in-poke-data=cage
  ^-  (quip old-card:transform old-agent:transform)
  !!
::
++  on-watch
  |~  path
  ^-  (quip old-card:transform old-agent:transform)
  !!
::
++  on-leave
  |~  path
  ^-  (quip old-card:transform old-agent:transform)
  !!
::
++  on-peek
  |~  path
  ^-  (unit (unit cage))
  !!
::
++  on-agent
  |~  [wire sign:agent:gall]
  ^-  (quip old-card:transform old-agent:transform)
  !!
::
++  on-arvo
  |~  [wire =sign-arvo]
  ^-  (quip old-card:transform old-agent:transform)
  !!
::
++  on-fail
  |~  [term tang]
  ^-  (quip old-card:transform old-agent:transform)
  !!
--
