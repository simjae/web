/**
 * 선택된 블록과 블록 정보를 입력받아 선택된 블록이 몇 번인지 계산합니다.
 *
 * @param selectedBlocks
 * @param steps
 */
export default function getBlockNo(selectedBlocks: number[], steps: { size: number }[]): number {
  let no = 0;
  for (const [idx, selectedIndex] of selectedBlocks.entries()) {
    let sub = selectedIndex;
    for (let i = idx + 1; i < steps.length; i++) {
      sub *= Math.pow(steps[i].size, 2);
    }

    no += sub;
  }

  return no + 1;
}
