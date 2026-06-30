import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

type PriceSliderProps = {
  min: number
  max: number
  value: [number, number]
  onChange: (v: [number, number]) => void
}

export function PriceSlider({ min, max, value, onChange }: PriceSliderProps) {
  return (
    <div className="grid gap-3 w-full">
      <div className="flex items-center justify-between">
        <Label>
          Price: {value[0]} - {value[1]}
        </Label>
      </div>

      <Slider
        min={min}
        max={max}
        step={1}
        value={value}
        onValueChange={(v) => onChange([v[0], v[1]])}
      />
    </div>
  )
}

