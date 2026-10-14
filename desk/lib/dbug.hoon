::  dbug: agent wrapper for generic debugging tools
::
::    usage: %-(agent:dbug your-agent)
::
/+  transform
|%
+$  poke
  $%  [%skip depth=@ud =poke]
      [%bowl ~]
      [%state grab=cord]
      [%incoming =about]
      [%outgoing =about]
  ==
::
+$  about
  $@  ~
  $%  [%ship =ship]
      [%path =path]
      [%wire =wire]
      [%term =term]
  ==
::
++  agent
  |=  agent=old-agent:transform
  ^-  old-agent:transform
  !.
  |_  =bowl:gall
  +*  this  .
      ag    ~(. agent bowl)
  ::
  ++  on-poke
    |=  [=mark =vase]
    ^-  (quip old-card:transform old-agent:transform)
    ?.  ?=(%dbug mark)
      =^  cards  agent  (on-poke:ag mark vase)
      [cards this]
    =/  dbug  !<(poke vase)
    =?  dbug  ?=([%skip %0 *] dbug)  poke.dbug
    ?:  ?=(%skip -.dbug)
      =^  cards  agent
        %+  on-poke:ag  %dbug
        !>(`poke`dbug(depth (dec depth.dbug)))
      [cards this]
    =;  =tang
      ((%*(. slog pri 1) tang) [~ this])
    ?-  -.dbug
      %bowl   [(sell !>(bowl))]~
    ::
        %state
      =?  grab.dbug  =('' grab.dbug)  '-'
      =;  product=^vase
        [(sell product)]~
      =/  state=^vase
        ::  if the underlying app has implemented a /dbug/state scry endpoint,
        ::  use that vase in place of +on-save's.
        ::
        =/  result=(each ^vase tang)
          (mule |.(q:(need (need (on-peek:ag /x/dbug/state)))))
        ?:(?=(%& -.result) p.result on-save:ag)
      %+  slap
        (slop state !>([bowl=bowl ..zuse]))
      (ream grab.dbug)
    ::
        %incoming
      =;  =tang
        ?^  tang  tang
        [%leaf "no matching subscriptions"]~
      %+  murn
        %+  sort  ~(tap by sup.bowl)
        |=  [[* a=[=ship =path]] [* b=[=ship =path]]]
        (aor [path ship]:a [path ship]:b)
      |=  [=duct [=ship =path]]
      ^-  (unit tank)
      =;  relevant=?
        ?.  relevant  ~
        `>[path=path from=ship duct=duct]<
      ?:  ?=(~ about.dbug)  &
      ?-  -.about.dbug
        %ship  =(ship ship.about.dbug)
        %path  ?=(^ (find path.about.dbug path))
        %wire  %+  lien  duct
               |=(=wire ?=(^ (find wire.about.dbug wire)))
        %term  !!
      ==
    ::
        %outgoing
      =;  =tang
        ?^  tang  tang
        [%leaf "no matching subscriptions"]~
      %+  murn
        %+  sort  ~(tap by wex.bowl)
        |=  [[[a=wire *] *] [[b=wire *] *]]
        (aor a b)
      |=  [[=wire =ship =term] [acked=? =path]]
      ^-  (unit tank)
      =;  relevant=?
        ?.  relevant  ~
        `>[wire=wire agnt=[ship term] path=path ackd=acked]<
      ?:  ?=(~ about.dbug)  &
      ?-  -.about.dbug
        %ship  =(ship ship.about.dbug)
        %path  ?=(^ (find path.about.dbug path))
        %wire  ?=(^ (find wire.about.dbug wire))
        %term  =(term term.about.dbug)
      ==
    ==
  ::
  ++  on-peek
    |=  =path
    ^-  (unit (unit cage))
    ?.  ?=([@ %dbug *] path)
      (on-peek:ag path)
    ?+  path  [~ ~]
      [%u %dbug ~]                 ``noun+!>(&)
      [%x %dbug %state ~]          ``noun+!>(on-save:ag)
      [%x %dbug %subscriptions ~]  ``noun+!>([wex sup]:bowl)
    ==
  ::
  ++  on-init
    ^-  (quip old-card:transform old-agent:transform)
    =^  cards  agent  on-init:ag
    [cards this]
  ::
  ++  on-save   on-save:ag
  ::
  ++  on-load
    |=  old-state=vase
    ^-  (quip old-card:transform old-agent:transform)
    =^  cards  agent  (on-load:ag old-state)
    [cards this]
  ::
  ++  on-watch
    |=  =path
    ^-  (quip old-card:transform old-agent:transform)
    =^  cards  agent  (on-watch:ag path)
    [cards this]
  ::
  ++  on-leave
    |=  =path
    ^-  (quip old-card:transform old-agent:transform)
    =^  cards  agent  (on-leave:ag path)
    [cards this]
  ::
  ++  on-agent
    |=  [=wire =sign:agent:gall]
    ^-  (quip old-card:transform old-agent:transform)
    =^  cards  agent  (on-agent:ag wire sign)
    [cards this]
  ::
  ++  on-arvo
    |=  [=wire =sign-arvo]
    ^-  (quip old-card:transform old-agent:transform)
    =^  cards  agent  (on-arvo:ag wire sign-arvo)
    [cards this]
  ::
  ++  on-fail
    |=  [=term =tang]
    ^-  (quip old-card:transform old-agent:transform)
    =^  cards  agent  (on-fail:ag term tang)
    [cards this]
  --
--
