import React from 'react';
import PropTypes from 'prop-types';
import { Trans } from '@lingui/macro';

import Tooltip from 'common/Tooltip';
import SpellLink from 'common/SpellLink';
import Icon from 'common/Icon';

import { PREPHASE_CAST_EVENT_TYPE } from 'interface/report/PhaseParser';

class Lane extends React.PureComponent {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
    fightStartTimestamp: PropTypes.number.isRequired,
    fightEndTimestamp: PropTypes.number.isRequired,
    secondWidth: PropTypes.number.isRequired,
    style: PropTypes.object,
  };

  getOffsetLeft(timestamp) {
    return (timestamp - this.props.fightStartTimestamp) / 1000 * this.props.secondWidth;
  }

  renderEvent(event) {
    switch (event.type) {
      case PREPHASE_CAST_EVENT_TYPE:
      case 'cast':
        return this.renderCast(event);
      case 'updatespellusable':
        if (event.trigger === 'restorecharge') {
          return (
            <React.Fragment key={`restorecharge-${event.timestamp}`}>
              {this.renderCooldown(event)}
              {this.renderRecharge(event)}
            </React.Fragment>
          );
        } else {
          return this.renderCooldown(event);
        }
      default:
        return null;
    }
  }
  renderCast(event) {
    //let pre phase events be displayed one second tick before the phase
    const left = this.getOffsetLeft(Math.max(this.props.fightStartTimestamp - 1000, event.timestamp));
    const spellId = event.ability.guid;

    return (
      <SpellLink
        key={`cast-${spellId}-${left}`}
        id={spellId}
        icon={false}
        className="cast"
        style={{ left }}
      >
        {/*<div style={{ height: level * 30 + 55, top: negative ? 0 : undefined, bottom: negative ? undefined : 0 }} />*/}
        <Icon
          icon={event.ability.abilityIcon.replace('.jpg', '')}
          alt={event.ability.name}
        />
      </SpellLink>
    );
  }
  renderCooldown(event) {
    //let pre phase events be displayed one second tick before the phase
    const left = this.getOffsetLeft(Math.max(this.props.fightStartTimestamp - 1000, event.start));
    const width = (Math.min(this.props.fightEndTimestamp, event.timestamp) - Math.max(this.props.fightStartTimestamp - 1000, event.start)) / 1000 * this.props.secondWidth;
    return (
      <Tooltip
        key={`cooldown-${left}`}
        content={(
          <Trans>
            {event.name || event.ability.name} cooldown: {((event.timestamp - event.start) / 1000).toFixed(1)}s
          </Trans>
        )}
      >
        <div
          className="cooldown"
          style={{
            left,
            width,
          }}
          data-effect="float"
        />
      </Tooltip>
    );
  }
  renderRecharge(event) {
    if (event.timestamp > this.props.fightEndTimestamp) {
      return null;
    }
    const left = this.getOffsetLeft(event.timestamp);
    return (
      <Tooltip content={<Trans>Charge restored</Trans>}>
        <div
          key={`recharge-${left}`}
          className="recharge"
          style={{
            left,
          }}
        />
      </Tooltip>
    );
  }

  render() {
    const { children, style } = this.props;

    const ability = children[0].ability;
    if(children[0].type === PREPHASE_CAST_EVENT_TYPE && children.length > 1 && children[1].type === "updatespellusable"){ //if first cast happened before phase and is followed by cooldown event
      if(children[1].end - 500 < this.props.fightStartTimestamp){ //if cooldown ended less than half a "tick" (second) after the phase, remove it to avoid visual overlaps
        children.splice(0, 2); //remove prephase cast and cooldown event
      }
    }

    return children.length > 0 && (
      <div
        className="lane"
        style={style}
      >
        <div className="legend">
          <Icon
            icon={ability.abilityIcon.replace('.jpg', '')}
            alt={ability.name}
          />
        </div>

        {children.map(event => this.renderEvent(event))}
      </div>
    );
  }
}

export default Lane;
