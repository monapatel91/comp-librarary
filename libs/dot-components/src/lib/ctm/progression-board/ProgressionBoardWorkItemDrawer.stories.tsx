import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  DotProgressionBoardWorkItemDrawer,
  ProgressionBoardDrawerProps,
} from './ProgressionBoardWorkItemDrawer';

export default {
  title: 'Experimental/DotProgressionBoardWorkItemDrawer',
  component: DotProgressionBoardWorkItemDrawer,
  argTypes: {
    drawerPaperProps: {
      style: {
        position: 'absolute',
      },
    },
    onClose: {
      action: 'closed',
    },
    width: {
      defaultValue: 320,
    },
    workItem: {
      defaultValue: {
        _id: '5b9c4fc12979930dbb0f13c5',
        change_count: 1,
        external_id: 'Story:1243',
        external_key: 'S-01031',
        isSplit: true,
        title: 'Accounting Integration - Spike',
        value_goal: 'improve',
        boardColumnRectRight: 100,
      },
    },
    workItemDetails: {
      defaultValue: {
        id: '5b9c4fc12979930dbb0f13c5',
        description:
          'Penatibus, donec vestibulum cubilia cras augue, mi urna commodo dui, ac convallis dictumst semper mollis porttitor neque velit nascetur fermentum justo pellentesque per porttitor magna facilisi consectetuer congue, ad. Netus condimentum nam congue penatibus habitant sollicitudin nullam congue rhoncus litora. Elementum aliquam. Vehicula morbi dui imperdiet Risus nibh parturient nibh convallis integer bibendum curabitur porttitor justo fames cubilia, lorem convallis rutrum justo sem lorem nisl aliquam ad a Imperdiet primis id auctor tellus dignissim mattis. Eros dapibus convallis fusce euismod dignissim Dapibus dignissim blandit nunc torquent nostra bibendum non vehicula platea orci Imperdiet egestas dignissim fames non At suscipit metus amet lacinia sodales facilisi. Augue vulputate aliquet elit. Et. Penatibus aliquam blandit volutpat cubilia ad. Per sapien. Bibendum fames hac. Potenti magnis curabitur id est, praesent arcu eu. Nostra ipsum natoque mauris, praesent mauris ultricies nec scelerisque ipsum velit eros Libero ultricies ornare hac aliquam per ornare a. Dapibus enim. Hymenaeos. Posuere bibendum morbi maecenas posuere turpis sollicitudin, interdum. Neque cubilia torquent netus curabitur fames cubilia. Luctus. Parturient dui montes ipsum, tellus duis cras lacinia amet sodales tellus inceptos facilisi rhoncus turpis nunc torquent, a quam. Scelerisque ultricies conubia mauris viverra dignissim consequat cum magna duis dis sem amet dignissim.',
        owner: ['Shari Heather Dory'],
        sourceSystemName: 'Assembla',
        sourceSystemUrl: 'http://localhost:8080/id=5b9c4fc12979930dbb0f13c5',
      },
    },
  },
} as Meta;

export const Default: Story<ProgressionBoardDrawerProps> = (args) => (
  <DotProgressionBoardWorkItemDrawer {...args} />
);
