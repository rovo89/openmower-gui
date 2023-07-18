//autogenerated:yes
//nolint:revive,lll
package msgs

import (
	"github.com/bluenviron/goroslib/v2/pkg/msg"
	"time"
)

const (
	WheelTick_WHEEL_VALID_FL uint8 = 1
	WheelTick_WHEEL_VALID_FR uint8 = 2
	WheelTick_WHEEL_VALID_RL uint8 = 4
	WheelTick_WHEEL_VALID_RR uint8 = 8
)

type WheelTick struct {
	msg.Package      `ros:"xbot_msgs"`
	msg.Definitions  `ros:"uint8 WHEEL_VALID_FL=1,uint8 WHEEL_VALID_FR=2,uint8 WHEEL_VALID_RL=4,uint8 WHEEL_VALID_RR=8"`
	Stamp            time.Time
	WheelTickFactor  uint32
	ValidWheels      uint8
	WheelDirectionFl uint8
	WheelTicksFl     uint32
	WheelDirectionFr uint8
	WheelTicksFr     uint32
	WheelDirectionRl uint8
	WheelTicksRl     uint32
	WheelDirectionRr uint8
	WheelTicksRr     uint32
}
