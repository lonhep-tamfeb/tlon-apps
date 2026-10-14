::  convert old-agent:gall and agent:gall
::  allowing to migrate to gall-2026 without major changes
::  by migrting with this library desk would require %super permission
::
|%
+$  old-card   card:old-agent
+$  poke-card  [%pass p=path q=$>(%agent rote:agent:gall)]
::
+$  old-note
  $%  $>(%agent rote:agent:gall)
      [%arvo old-note-arvo]
    ::
      [%grow =spur =page]
      [%tomb =case =spur]
      [%cull =case =spur]
      [%tend =coop:gall =path =page]
      [%germ =coop:gall]
      [%snip =coop:gall]
      [%keen secret=? spar:ames]
  ==
::
+$  old-note-arvo
  $~  [%b %wake ~]
  $%  $<(?(%e %k) note-arvo)
      [%e task:old-eyre]
      [%k task:old-khan]
  ==
::
++  old-eyre
  |%
  +$  binding
    $:  site=(unit @t)
        path=(list @t)
    ==
  ::
  +$  task
    $~  [%vega ~]
    $%  $<(?(%connect %serve %disconnect %set-response) task:eyre)
        [%connect =binding app=term]
        [%serve =binding =generator:eyre]
        [%disconnect =binding]
        [%set-response url=@t entry=(unit cache-entry:eyre)]
    ==
  --
::
++  old-khan
  |%
  +$  task
    $~  [%vega ~]
    $%  $<(?(%fard %fyrd %lard) task:khan)
        [%fard p=(fyrd:khan cage)]
        [%fyrd p=(fyrd:khan cast:khan)]
        [%lard =bear:khan =shed:khan]
    ==
  --
::
++  old-agent
  =<  form
  |%
  +$  step  (quip card form)
  +$  card  (wind old-note gift)
  +$  note  old-note
  +$  task  task:agent:gall
  +$  gift  gift:agent:gall
  +$  sign  sign:agent:gall
  ++  form
    $_  ^|
    |_  bowl:agent:gall
    ++  on-init
      *(quip card _^|(..on-init))
    ::
    ++  on-save
      *vase
    ::
    ++  on-load
      |~  old-state=vase
      *(quip card _^|(..on-init))
    ::
    ++  on-poke
      |~  [mark vase]
      *(quip card _^|(..on-init))
    ::
    ++  on-watch
      |~  path
      *(quip card _^|(..on-init))
    ::
    ++  on-leave
      |~  path
      *(quip card _^|(..on-init))
    ::
    ++  on-peek
      |~  path
      *(unit (unit cage))
    ::
    ++  on-agent
      |~  [wire sign]
      *(quip card _^|(..on-init))
    ::
    ++  on-arvo
      |~  [wire sign-arvo]
      *(quip card _^|(..on-init))
    ::
    ++  on-fail
      |~  [term tang]
      *(quip card _^|(..on-init))
    --
  --
::
++  agent
  |=  agent=old-agent
  ^-  agent:gall
  |_  =bowl:gall
  +*  this  .
    ag  ~(. agent bowl)
    tr  (transform bowl)
  ::
  ++  on-init
    ^-  (quip card:agent:gall agent:gall)
    =^  cards=(list old-card)  agent  on-init:ag
    [(cards:tr cards) this]
  ::
  ++  on-save  on-save:ag
  ::
  ++  on-load
    |=  old-state=vase
    ^-  (quip card:agent:gall agent:gall)
    =^  cards=(list old-card)  agent  (on-load:ag old-state)
    [(cards:tr cards) this]
  ::
  ++  on-poke
    |=  [=mark =vase]
    ^-  (quip card:agent:gall agent:gall)
    =^  cards=(list old-card)  agent  (on-poke:ag mark vase)
    [(cards:tr cards) this]
  ::
  ++  on-watch
    |=  =path
    ^-  (quip card:agent:gall agent:gall)
    =^  cards=(list old-card)  agent  (on-watch:ag path)
    [(cards:tr cards) this]
  ::
  ++  on-leave
    |=  =path
    ^-  (quip card:agent:gall agent:gall)
    =^  cards=(list old-card)  agent  (on-leave:ag path)
    [(cards:tr cards) this]
  ::
  ++  on-peek
    |=  =path
    ^-  (unit (unit cage))
    (on-peek:ag path)
  ::
  ++  on-agent
    |=  [=wire =sign:agent:gall]
    ^-  (quip card:agent:gall agent:gall)
    =^  cards=(list old-card)  agent  (on-agent:ag wire sign)
    [(cards:tr cards) this]
  ::
  ++  on-arvo
    |=  [=wire gift=gift-user-v1:gall]
    ^-  (quip card:agent:gall agent:gall)
    =^  cards=(list old-card)  agent
      (on-arvo:ag wire (gift:tr gift))
    [(cards:tr cards) this]
  ::
  ++  on-fail
    |=  [=frag:agent:gall =call:agent:gall]
    ^-  (quip card:agent:gall agent:gall)
    =^  cards=(list old-card)  agent  (on-fail:ag -.call tang.frag)
    [(cards:tr cards) this]
  --
::
++  transform
  |=  bowl=bowl:gall
  |%
  ::
  ++  cards
    |=  cards=(list old-card)
    ^-  (list card:agent:gall)
    %+  turn  cards
    |=  card=old-card
    ^-  card:agent:gall
    ?+  -.card  !!
      %give  [%give p.card]
    ::
        %pass
      ?-  -.q.card
        %agent  [%pass p.card %agent +.q.card]
      ::
          %arvo
        =-  [%pass p.card %arvo %syscall -]
        ^-  note-arvo
        ?+  +<.q.card     +.q.card
            %e
          ?+  +>-.q.card  +.q.card
            %serve         [%e %serve [path.binding generator]:q.card]
            %connect       [%e %connect [path.binding app]:q.card]
            %disconnect    [%e %disconnect path.binding.q.card]
            %set-response  [%e %set-response q.byk.bowl +>+.q.card]
          ==
        ::
            %k
          ?+  +>-.q.card  +.q.card
            %fard  [%k %fard q.byk.bowl p.q.card]
            %fyrd  [%k %fyrd q.byk.bowl p.q.card]
            %lard  [%k %lard q.byk.bowl [bear shed]:q.card]
          ==
        ==
    ::
          ?(%grow %tomb %cull %tend %germ %snip %keen)
        [%pass p.card %arvo %ames q.card]
      ==
    ==
  ::
  ++  gift
    |=  gift=gift-user-v1:gall
    ^-  sign-arvo
    ?+  -.gift   ~|('got unexpected gift' !!)
        %syscall
      =+  !<(=sign-arvo [-:!>(*sign-arvo) sign-arvo.gift])
      sign-arvo
    ::
        %ames  ::  [%ames %sage sage:mess:ames]
      ?>  ?=([%ames %sage [[@ *] ?(~ *)]] gift)
      ;;(sign-arvo gift)
    ::
      %unsupported  ~|('got unsupported gift' !!)  :: TODO: include wire, do not crash
        %revoked
      ~|  "got revoked resource gift {<arvo-resource.gift>}"
      !!
    ==
  --
--