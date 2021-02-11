import { Icon } from '@material-ui/core';
import styled from 'styled-components';

export const rootClassName = 'dot-icon';

export const StyledIcon = styled(Icon)`
  &.${rootClassName} {
    align-items: center;
    box-sizing: content-box;
    display: flex;
    font-size: 20px;
    height: 24px;
    justify-content: center;
    width: 24px;

      &.MuiIcon-fontSizeLarge {
        font-size: 28px;
        height: 35px;
        width: 35px;
      }
      &.MuiIcon-fontSizeSmall {
        font-size: 16px;
        height: 20px;
        width: 20px;
      }

      i {
        &:before {
          font-family: 'dot' !important;
          font-style: normal;
          font-weight: normal;
          font-variant: normal;
          text-transform: none;
          line-height: 1;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        &.icon-host:before {
          content: '\\e9b9';
        }
        &.icon-cluster:before {
          content: '\\e9ba';
        }
        &.icon-environment:before {
          content: '\\e9bb';
        }
        &.icon-monitor-controls:before {
          content: '\\e9bc';
        }
        &.icon-flag:before {
          content: '\\e9bd';
        }
        &.icon-satelite:before {
          content: '\\e9be';
        }
        &.icon-satelite-group:before {
          content: '\\e9bf';
        }
        &.icon-monitor-gears:before {
          content: '\\e9c0';
        }
        &.icon-patch:before {
          content: '\\e9b6';
        }
        &.icon-branch:before {
          content: '\\e9b4';
        }
        &.icon-send-airplane:before {
          content: '\\e9b5';
        }
        &.icon-briefcase:before {
          content: '\\e9b7';
        }
        &.icon-cluster-dependencies:before {
          content: '\\e9b8';
        }
        &.icon-script:before {
          content: '\\e966';
        }
        &.icon-pattern-bundle:before {
          content: '\\e967';
        }
        &.icon-outline:before {
          content: '\\e968';
        }
        &.icon-apps:before {
          content: '\\e969';
        }
        &.icon-archive:before {
          content: '\\e96a';
        }
        &.icon-arrow-down:before {
          content: '\\e96b';
        }
        &.icon-arrow-right:before {
          content: '\\e96c';
        }
        &.icon-arrow-up:before {
          content: '\\e96d';
        }
        &.icon-attachment:before {
          content: '\\e96e';
        }
        &.icon-board:before {
          content: '\\e96f';
        }
        &.icon-calendar:before {
          content: '\\e970';
        }
        &.icon-change:before {
          content: '\\e971';
        }
        &.icon-chevron-right:before {
          content: '\\e972';
        }
        &.icon-circle-minus-outlines:before {
          content: '\\e973';
        }
        &.icon-circle-paused:before {
          content: '\\e974';
        }
        &.icon-column:before {
          content: '\\e975';
        }
        &.icon-comment:before {
          content: '\\e976';
        }
        &.icon-configuration-preferences:before {
          content: '\\e977';
        }
        &.icon-conversation-bubbles:before {
          content: '\\e978';
        }
        &.icon-dashboard:before {
          content: '\\e979';
        }
        &.icon-database:before {
          content: '\\e97a';
        }
        &.icon-delivery-eta-icon:before {
          content: '\\e97b';
        }
        &.icon-download:before {
          content: '\\e97c';
        }
        &.icon-drag:before {
          content: '\\e97d';
        }
        &.icon-duplicate:before {
          content: '\\e97e';
        }
        &.icon-exit:before {
          content: '\\e97f';
        }
        &.icon-expand-chevrons:before {
          content: '\\e980';
        }
        &.icon-expander:before {
          content: '\\e981';
        }
        &.icon-file-image:before {
          content: '\\e982';
        }
        &.icon-file-lines:before {
          content: '\\e983';
        }
        &.icon-file-warning:before {
          content: '\\e984';
        }
        &.icon-file:before {
          content: '\\e985';
        }
        &.icon-filter:before {
          content: '\\e986';
        }
        &.icon-flag-none:before {
          content: '\\e987';
        }
        &.icon-folder:before {
          content: '\\e988';
        }
        &.icon-full-screen:before {
          content: '\\e989';
        }
        &.icon-fullscreen-enter:before {
          content: '\\e98a';
        }
        &.icon-fullscreen-exit:before {
          content: '\\e98b';
        }
        &.icon-grid:before {
          content: '\\e98c';
        }
        &.icon-hard-drive:before {
          content: '\\e98d';
        }
        &.icon-help:before {
          content: '\\e98e';
        }
        &.icon-history:before {
          content: '\\e98f';
        }
        &.icon-inbox:before {
          content: '\\e990';
        }
        &.icon-link:before {
          content: '\\e991';
        }
        &.icon-list:before {
          content: '\\e992';
        }
        &.icon-lock:before {
          content: '\\e993';
        }
        &.icon-mail:before {
          content: '\\e994';
        }
        &.icon-menu:before {
          content: '\\e995';
        }
        &.icon-monitor-satellite:before {
          content: '\\e996';
        }
        &.icon-monitor:before {
          content: '\\e997';
        }
        &.icon-notification-bell:before {
          content: '\\e998';
        }
        &.icon-open-new-tab:before {
          content: '\\e999';
        }
        &.icon-options:before {
          content: '\\e99a';
        }
        &.icon-parallel:before {
          content: '\\e99b';
        }
        &.icon-pending-clock:before {
          content: '\\e99c';
        }
        &.icon-play:before {
          content: '\\e99d';
        }
        &.icon-redo:before {
          content: '\\e99e';
        }
        &.icon-refresh:before {
          content: '\\e99f';
        }
        &.icon-release:before {
          content: '\\e9a0';
        }
        &.icon-search:before {
          content: '\\e9a3';
        }
        &.icon-sequential:before {
          content: '\\e9a4';
        }
        &.icon-sort-asc:before {
          content: '\\e9a5';
        }
        &.icon-sort-desc:before {
          content: '\\e9a6';
        }
        &.icon-star-favorites-active:before {
          content: '\\e9a7';
        }
        &.icon-star-favorites-default:before {
          content: '\\e9a8';
        }
        &.icon-target:before {
          content: '\\e9a9';
        }
        &.icon-task:before {
          content: '\\e9aa';
        }
        &.icon-template:before {
          content: '\\e9ab';
        }
        &.icon-undo:before {
          content: '\\e9ac';
        }
        &.icon-unlock:before {
          content: '\\e9ad';
        }
        &.icon-variable:before {
          content: '\\e9ae';
        }
        &.icon-vault:before {
          content: '\\e9af';
        }
        &.icon-visibility-off:before {
          content: '\\e9b0';
        }
        &.icon-visibility-on:before {
          content: '\\e9b1';
        }
        &.icon-webhook:before {
          content: '\\e9b2';
        }
        &.icon-wrench:before {
          content: '\\e9b3';
        }
        &.icon-bright:before {
          content: '\\e961';
        }
        &.icon-rogue-commits:before {
          content: '\\e962';
        }
        &.icon-home:before {
          content: '\\e963';
        }
        &.icon-blocking-issues:before {
          content: '\\e964';
        }
        &.icon-print-link:before {
          content: '\\e965';
        }
        &.icon-logo-deploy:before {
          content: '\\e902';
        }
        &.icon-logo-experitest:before {
          content: '\\e903';
        }
        &.icon-logo-numerify:before {
          content: '\\e904';
        }
        &.icon-logo-arxan:before {
          content: '\\e905';
        }
        &.icon-logo-continuum:before {
          content: '\\e906';
        }
        &.icon-logo-versionone:before {
          content: '\\e907';
        }
        &.icon-logo-release:before {
          content: '\\e908';
        }
        &.icon-warning-solid:before {
          content: '\\e909';
        }
        &.icon-warning-outline:before {
          content: '\\e90a';
        }
        &.icon-info-solid:before {
          content: '\\e90b';
        }
        &.icon-minus-solid:before {
          content: '\\e90c';
        }
        &.icon-check-solid:before {
          content: '\\e90d';
        }
        &.icon-error-solid:before {
          content: '\\e90e';
        }
        &.icon-error-outlines:before {
          content: '\\e90f';
        }
        &.icon-add-outlined:before {
          content: '\\e910';
        }
        &.icon-add-solid:before {
          content: '\\e911';
        }
        &.icon-clear-solid:before {
          content: '\\e912';
        }
        &.icon-dark:before {
          content: '\\e913';
        }
        &.icon-location:before {
          content: '\\e914';
        }
        &.icon-roadmap:before {
          content: '\\e915';
        }
        &.icon-follow-solid:before {
          content: '\\e916';
        }
        &.icon-follow-outlined:before {
          content: '\\e917';
        }
        &.icon-video:before {
          content: '\\e918';
        }
        &.icon-thumbs-down:before {
          content: '\\e919';
        }
        &.icon-camera:before {
          content: '\\e91a';
        }
        &.icon-users:before {
          content: '\\e91b';
        }
        &.icon-user:before {
          content: '\\e91c';
        }
        &.icon-announcement:before {
          content: '\\e91d';
        }
        &.icon-not-allowed:before {
          content: '\\e91e';
        }
        &.icon-zoom-out:before {
          content: '\\e91f';
        }
        &.icon-zoom-in:before {
          content: '\\e920';
        }
        &.icon-triangle:before {
          content: '\\e921';
        }
        &.icon-delay:before {
          content: '\\e922';
        }
        &.icon-circle-outline:before {
          content: '\\e923';
        }
        &.icon-circle:before {
          content: '\\e924';
        }
        &.icon-add-from-list:before {
          content: '\\e925';
        }
        &.icon-sync:before {
          content: '\\e926';
        }
        &.icon-keyboard:before {
          content: '\\e927';
        }
        &.icon-planner:before {
          content: '\\e928';
        }
        &.icon-tag:before {
          content: '\\e929';
        }
        &.icon-progress:before {
          content: '\\e92a';
        }
        &.icon-timeline:before {
          content: '\\e92b';
        }
        &.icon-abort:before {
          content: '\\e92c';
        }
        &.icon-cancel:before {
          content: '\\e92d';
        }
        &.icon-power:before {
          content: '\\e92e';
        }
        &.icon-resize:before {
          content: '\\e92f';
        }
        &.icon-close:before {
          content: '\\e930';
        }
        &.icon-save:before {
          content: '\\e931';
        }
        &.icon-drag-vertical-up-down:before {
          content: '\\e932';
        }
        &.icon-add:before {
          content: '\\e933';
        }
        &.icon-minus:before {
          content: '\\e934';
        }
        &.icon-target-none:before {
          content: '\\e935';
        }
        &.icon-placeholder:before {
          content: '\\e936';
        }
        &.icon-server:before {
          content: '\\e937';
        }
        &.icon-square-wrench:before {
          content: '\\e938';
        }
        &.icon-square-wrench-check:before {
          content: '\\e939';
        }
        &.icon-square-settings:before {
          content: '\\e93a';
        }
        &.icon-trigger:before {
          content: '\\e93c';
        }
        &.icon-precondition:before {
          content: '\\e93d';
        }
        &.icon-composition:before {
          content: '\\e93e';
        }
        &.icon-block:before {
          content: '\\e93f';
        }
        &.icon-group:before {
          content: '\\e940';
        }
        &.icon-settings-admin-opaque:before {
          content: '\\e941';
        }
        &.icon-puzzle:before {
          content: '\\e942';
        }
        &.icon-alphabet-icon:before {
          content: '\\e943';
        }
        &.icon-crop:before {
          content: '\\e944';
        }
        &.icon-upload-file:before {
          content: '\\e945';
        }
        &.icon-container:before {
          content: '\\e946';
        }
        &.icon-flag-risk:before {
          content: '\\e947';
        }
        &.icon-learn:before {
          content: '\\e948';
        }
        &.icon-tree:before {
          content: '\\e949';
        }
        &.icon-process-template:before {
          content: '\\e94a';
        }
        &.icon-flag-attention:before {
          content: '\\e94b';
        }
        &.icon-collection:before {
          content: '\\e94c';
        }
        &.icon-table:before {
          content: '\\e94d';
        }
        &.icon-linkBrakeIt:before {
          content: '\\e94e';
        }
        &.icon-move-folder:before {
          content: '\\e94f';
        }
        &.icon-columns:before {
          content: '\\e950';
        }
        &.icon-file-word-doc:before {
          content: '\\e951';
        }
        &.icon-file-ppt:before {
          content: '\\e952';
        }
        &.icon-file-zip:before {
          content: '\\e953';
        }
        &.icon-file-xls:before {
          content: '\\e954';
        }
        &.icon-file-pdf:before {
          content: '\\e955';
        }
        &.icon-file-xml:before {
          content: '\\e956';
        }
        &.icon-dictionary-locked:before {
          content: '\\e957';
        }
        &.icon-dictionary:before {
          content: '\\e958';
        }
        &.icon-file-dotted:before {
          content: '\\e959';
        }
        &.icon-file-circle-check:before {
          content: '\\e95a';
        }
        &.icon-back:before {
          content: '\\e95b';
        }
        &.icon-chevron-left:before {
          content: '\\e95c';
        }
        &.icon-chevron-up:before {
          content: '\\e95d';
        }
        &.icon-chevron-down:before {
          content: '\\e95e';
        }
        &.icon-return-level-up:before {
          content: '\\e95f';
        }
        &.icon-return:before {
          content: '\\e960';
        }
        &.icon-edit:before {
          content: '\\e900';
        }
        &.icon-delete:before {
          content: '\\e901';
        }
        &.icon-settings:before {
          content: "\\e93b";
        }
        &.icon-network-drive:before {
          content: "\\e9a1";
        }
        &.icon-GitOps:before {
          content: "\\e9a2";
        }
        &.icon-rss:before {
          content: "\\e9c1";
        }
        &.icon-bug:before {
          content: "\\e9c2";
        }
        &.icon-cloud:before {
          content: "\\e9c3";
        }
        &.icon-more-horizontal:before {
          content: "\\e9c4";
        }
        &.icon-expand:before {
          content: "\\e9c5";
        }
        &.icon-collapse:before {
          content: "\\e9c6";
        }
      }
    }
  }
`;
