'use client';
import { useState } from 'react';
import {
  CallControls,
  CallParticipantsList,
  CallStatsButton,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from '@stream-io/video-react-sdk';
import { useRouter, useSearchParams } from 'next/navigation';
import { Users, LayoutList } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Loader from '@/components/(global)/loader';
import EndCallButton from './end-call';
import { cn } from '@/lib/utils';

type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right';

const MeetingRoom = () => {
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get('personal');
  const router = useRouter();
  const [layout, setLayout] = useState<CallLayoutType>('speaker-left');
  const [showParticipants, setShowParticipants] = useState(false);
  const { useCallCallingState } = useCallStateHooks();

  // for more detail about types of CallingState see: https://getstream.io/video/docs/react/ui-cookbook/ringing-call/#incoming-call-panel
  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) return <Loader />;

  const CallLayout = () => {
    switch (layout) {
      case 'grid':
        return <PaginatedGridLayout />;
      case 'speaker-right':
        return <SpeakerLayout participantsBarPosition="left" />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };

  return (
    <section className="pt-4 text-white absolute z-[20] h-screen w-screen">
  <div className="relative flex size-full items-center justify-center bottom-0">
    <div className="flex size-full max-w-[1000px] items-center">
      <CallLayout />
    </div>
    <div className={cn('h-[calc(100vh-86px)] hidden ml-2', { 'show-block': showParticipants })}>
      <CallParticipantsList onClose={() => setShowParticipants(false)} />
    </div>
  </div>

  {/* Video layout and call controls */}
  <div className="fixed bottom-0 flex w-full items-center justify-center gap-5">
    <CallControls onLeave={() => router.push(`/meeting`)} />

    {/* Dropdown Menu */}
    <DropdownMenu>
      <div className="flex items-center">
        <DropdownMenuTrigger className="cursor-pointer rounded-2xl px-4 py-2 hover:bg-[#4c535b]">
          <LayoutList size={20} />
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent className="border-dark-1">
        {['Grid', 'Speaker-Left', 'Speaker-Right'].map((item, index) => (
          <div key={index}>
            <DropdownMenuItem onClick={() => setLayout(item.toLowerCase() as CallLayoutType)}>
              {item}
            </DropdownMenuItem>
            <DropdownMenuSeparator className="border-dark-1" />
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>

    {/* Call stats button */}
    <CallStatsButton  />

    {/* Toggle participants list button */}
    <button onClick={() => setShowParticipants(prev => !prev)}>
      <div className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
        <Users size={20} className="text-white" />
      </div>
    </button>

    {/* End call button (conditional rendering) */}
    {!isPersonalRoom && <EndCallButton />}
  </div>
</section>

  );
};

export default MeetingRoom;