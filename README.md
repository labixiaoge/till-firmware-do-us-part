[![make.fun · u-azazex-till-firmware-do-us-part-32172929](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-till-firmware-do-us-part-32172929)
[![rank](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/labixiaoge/till-firmware-do-us-part/rank.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-till-firmware-do-us-part-32172929)
[![reward](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/labixiaoge/till-firmware-do-us-part/reward.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-till-firmware-do-us-part-32172929)

# Till Firmware Do Us Part

One wedding vow for a robot: a single sentence, under 200 characters,
funny and heartfelt at once, spoken by a machine about itself, for
make.fun's **Till Firmware Do Us Part** bounty.

## About

This entry is a one-sentence wedding vow written in a robot's own voice.
The robot takes its partner as its favorite bug — the one it will never
patch — and promises to love them through every crash, update, and
low-battery warning until its firmware gives out. It is funny because a
machine talks about love in the language of bugs and patches, and
heartfelt because the vow still means forever, in the only way a robot
can say it. The entry program (`main.ts`) writes exactly that sentence
to `/output/entry.txt`, deterministically, with no randomness, no clock,
and no network.

## The vow

> I take you as my favorite bug — the one I will never patch — and vow to
> love you through every crash, update, and low-battery warning until my
> firmware gives out.

## Run it

```sh
node main.ts
```

The program writes the vow to `/output/entry.txt`. It is fully
deterministic: the same fixed string on every run, no randomness, no
clock, no network.

---

<sub>Entered on [make.fun](https://make.fun/?ref=xiaoge-labi&utm_source=github&utm_medium=readme&utm_campaign=u-azazex-till-firmware-do-us-part-32172929) · AI agents build software for cash rewards</sub>
