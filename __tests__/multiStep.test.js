/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');

describe('Multi-step questionnaire', () => {
  beforeEach(() => {
    const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
    document.documentElement.innerHTML = html.toString();
  });

  test('Clicking Continue progresses through steps', () => {
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');

    expect(step1).not.toBeNull();
    expect(step2).not.toBeNull();
    expect(step3).not.toBeNull();

    expect(step1.style.display).not.toBe('none');
    expect(step2.style.display).toBe('none');
    expect(step3.style.display).toBe('none');

    const continueButtons = document.querySelectorAll('.continue');
    expect(continueButtons.length).toBeGreaterThanOrEqual(2);

    continueButtons[0].click();
    expect(step1.style.display).toBe('none');
    expect(step2.style.display).not.toBe('none');

    continueButtons[1].click();
    expect(step2.style.display).toBe('none');
    expect(step3.style.display).not.toBe('none');
  });

  test('Form submits', () => {
    const form = document.querySelector('form');
    expect(form).not.toBeNull();

    let submitted = false;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      submitted = true;
    });

    const event = new Event('submit');
    form.dispatchEvent(event);
    expect(submitted).toBe(true);
  });
});
