<script>
  import CodeBlock from "$lib/CodeBlock.svelte";
  import Article from "$lib/Article.svelte";
</script>

<Article title="Catppuccin">
  <section class="mb-12">
    <h1 class="text-2xl font-bold mb-4">Catppuccin Theme</h1>
    <p>Catppuccin is a community-driven pastel theme that aims to be the middle ground between low and high contrast themes. It consists of 4 soothing warm flavors with 26 eye-candy colors each, perfect for coding, designing, and much more! In addition, this repository tracks the development of the actual color palette, the project's documentation, organization-wide assets, resources and code samples for maintainers/developers.</p>
    <a href="https://github.com/catppuccin/catppuccin" class="text-blue underline">Catppuccin GitHub</a>
  </section>
  <section class="mb-12">
    <h1 class="text-2xl font-bold mb-4">Colors</h1>
    <details>
      <summary>Latte</summary>
      <table class="table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2">Labels</th>
            <th class="px-4 py-2">Hex</th>
            <th class="px-4 py-2">RGB</th>
            <th class="px-4 py-2">HSL</th>
            <th class="px-4 py-2">Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-2">Rosewater</td>
            <td class="px-4 py-2">#dc8a78</td>
            <td class="px-4 py-2">rgb(220, 138, 120)</td>
            <td class="px-4 py-2">hsl(11, 59%, 67%)</td>
            <td class="px-4 py-2 bg-rosewater" />
          </tr>
          <tr>
            <td class="px-4 py-2">Flamingo</td>
            <td class="px-4 py-2">#dd7878</td>
            <td class="px-4 py-2">rgb(221, 120, 120)</td>
            <td class="px-4 py-2">hsl(0, 60%, 67%)</td>
            <td class="px-4 py-2 bg-flamingo" />
          </tr>
          <tr>
            <td class="px-4 py-2">Pink</td>
            <td class="px-4 py-2">#ea76cb</td>
            <td class="px-4 py-2">rgb(234, 118, 203)</td>
            <td class="px-4 py-2">hsl(316, 73%, 69%)</td>
            <td class="px-4 py-2 bg-pink" />
          </tr>
          <tr>
            <td class="px-4 py-2">Mauve</td>
            <td class="px-4 py-2">#8839ef</td>
            <td class="px-4 py-2">rgb(136, 57, 239)</td>
            <td class="px-4 py-2">hsl(266, 85%, 58%)</td>
            <td class="px-4 py-2 bg-mauve" />
          </tr>
          <tr>
            <td class="px-4 py-2">Red</td>
            <td class="px-4 py-2">#d20f39</td>
            <td class="px-4 py-2">rgb(210, 15, 57)</td>
            <td class="px-4 py-2">hsl(347, 87%, 44%)</td>
            <td class="px-4 py-2 bg-red" />
          </tr>
          <tr>
            <td class="px-4 py-2">Maroon</td>
            <td class="px-4 py-2">#e64553</td>
            <td class="px-4 py-2">rgb(230, 69, 83)</td>
            <td class="px-4 py-2">hsl(355, 76%, 59%)</td>
            <td class="px-4 py-2 bg-maroon" />
          </tr>
          <tr>
            <td class="px-4 py-2">Peach</td>
            <td class="px-4 py-2">#fe640b</td>
            <td class="px-4 py-2">rgb(254, 100, 11)</td>
            <td class="px-4 py-2">hsl(22, 99%, 52%)</td>
            <td class="px-4 py-2 bg-peach" />
          </tr>
          <tr>
            <td class="px-4 py-2">Yellow</td>
            <td class="px-4 py-2">#df8e1d</td>
            <td class="px-4 py-2">rgb(223, 142, 29)</td>
            <td class="px-4 py-2">hsl(35, 77%, 49%)</td>
            <td class="px-4 py-2 bg-yellow" />
          </tr>
          <tr>
            <td class="px-4 py-2">Green</td>
            <td class="px-4 py-2">#40a02b</td>
            <td class="px-4 py-2">rgb(64, 160, 43)</td>
            <td class="px-4 py-2">hsl(109, 58%, 40%)</td>
            <td class="px-4 py-2 bg-green" />
          </tr>
          <tr>
            <td class="px-4 py-2">Teal</td>
            <td class="px-4 py-2">#179299</td>
            <td class="px-4 py-2">rgb(23, 146, 153)</td>
            <td class="px-4 py-2">hsl(183, 74%, 35%)</td>
            <td class="px-4 py-2 bg-teal" />
          </tr>
          <tr>
            <td class="px-4 py-2">Sky</td>
            <td class="px-4 py-2">#04a5e5</td>
            <td class="px-4 py-2">rgb(4, 165, 229)</td>
            <td class="px-4 py-2">hsl(197, 97%, 46%)</td>
            <td class="px-4 py-2 bg-sky" />
          </tr>
          <tr>
            <td class="px-4 py-2">Sapphire</td>
            <td class="px-4 py-2">#209fb5</td>
            <td class="px-4 py-2">rgb(32, 159, 181)</td>
            <td class="px-4 py-2">hsl(189, 70%, 42%)</td>
            <td class="px-4 py-2 bg-sapphire" />
          </tr>
          <tr>
            <td class="px-4 py-2">Blue</td>
            <td class="px-4 py-2">#1e66f5</td>
            <td class="px-4 py-2">rgb(30, 102, 245)</td>
            <td class="px-4 py-2">hsl(220, 91%, 54%)</td>
            <td class="px-4 py-2 bg-blue" />
          </tr>
          <tr>
            <td class="px-4 py-2">Lavender</td>
            <td class="px-4 py-2">#7287fd</td>
            <td class="px-4 py-2">rgb(114, 135, 253)</td>
            <td class="px-4 py-2">hsl(231, 97%, 72%)</td>
            <td class="px-4 py-2 bg-lavender" />
          </tr>
          <tr>
            <td class="px-4 py-2">Text</td>
            <td class="px-4 py-2">#4c4f69</td>
            <td class="px-4 py-2">rgb(76, 79, 105)</td>
            <td class="px-4 py-2">hsl(234, 16%, 35%)</td>
            <td class="px-4 py-2 bg-text" />
          </tr>
          <tr>
            <td class="px-4 py-2">Subtext1</td>
            <td class="px-4 py-2">#5c5f77</td>
            <td class="px-4 py-2">rgb(92, 95, 119)</td>
            <td class="px-4 py-2">hsl(233, 13%, 41%)</td>
            <td class="px-4 py-2 bg-subtext1" />
          </tr>
          <tr>
            <td class="px-4 py-2">Subtext0</td>
            <td class="px-4 py-2">#6c6f85</td>
            <td class="px-4 py-2">rgb(108, 111, 133)</td>
            <td class="px-4 py-2">hsl(233, 10%, 47%)</td>
            <td class="px-4 py-2 bg-subtext0" />
          </tr>
          <tr>
            <td class="px-4 py-2">Overlay2</td>
            <td class="px-4 py-2">#7c7f93</td>
            <td class="px-4 py-2">rgb(124, 127, 147)</td>
            <td class="px-4 py-2">hsl(232, 10%, 53%)</td>
            <td class="px-4 py-2 bg-overlay2" />
          </tr>
          <tr>
            <td class="px-4 py-2">Overlay1</td>
            <td class="px-4 py-2">#8c8fa1</td>
            <td class="px-4 py-2">rgb(140, 143, 161)</td>
            <td class="px-4 py-2">hsl(231, 10%, 59%)</td>
            <td class="px-4 py-2 bg-overlay1" />
          </tr>
          <tr>
            <td class="px-4 py-2">Overlay0</td>
            <td class="px-4 py-2">#9ca0b0</td>
            <td class="px-4 py-2">rgb(156, 160, 176)</td>
            <td class="px-4 py-2">hsl(228, 11%, 65%)</td>
            <td class="px-4 py-2 bg-overlay0" />
          </tr>
          <tr>
            <td class="px-4 py-2">Surface2</td>
            <td class="px-4 py-2">#acb0be</td>
            <td class="px-4 py-2">rgb(172, 176, 190)</td>
            <td class="px-4 py-2">hsl(227, 12%, 71%)</td>
            <td class="px-4 py-2 bg-surface2" />
          </tr>
          <tr>
            <td class="px-4 py-2">Surface1</td>
            <td class="px-4 py-2">#bcc0cc</td>
            <td class="px-4 py-2">rgb(188, 192, 204)</td>
            <td class="px-4 py-2">hsl(225, 14%, 77%)</td>
            <td class="px-4 py-2 bg-surface1" />
          </tr>
          <tr>
            <td class="px-4 py-2">Surface0</td>
            <td class="px-4 py-2">#ccd0da</td>
            <td class="px-4 py-2">rgb(204, 208, 218)</td>
            <td class="px-4 py-2">hsl(223, 16%, 83%)</td>
            <td class="px-4 py-2 bg-surface0" />
          </tr>
          <tr>
            <td class="px-4 py-2">Base</td>
            <td class="px-4 py-2">#eff1f5</td>
            <td class="px-4 py-2">rgb(239, 241, 245)</td>
            <td class="px-4 py-2">hsl(220, 23%, 95%)</td>
            <td class="px-4 py-2 bg-base" />
          </tr>
          <tr>
            <td class="px-4 py-2">Mantle</td>
            <td class="px-4 py-2">#e6e9ef</td>
            <td class="px-4 py-2">rgb(230, 233, 239)</td>
            <td class="px-4 py-2">hsl(220, 22%, 92%)</td>
            <td class="px-4 py-2 bg-mantle" />
          </tr>
          <tr>
            <td class="px-4 py-2">Crust</td>
            <td class="px-4 py-2">#dce0e8</td>
            <td class="px-4 py-2">rgb(220, 224, 232)</td>
            <td class="px-4 py-2">hsl(220, 21%, 89%)</td>
            <td class="px-4 py-2 bg-crust" />
          </tr>
        </tbody>
      </table>
    </details>
    <details>
      <summary>Frappe</summary>
      <table class="table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2">Labels</th>
            <th class="px-4 py-2">Hex</th>
            <th class="px-4 py-2">RGB</th>
            <th class="px-4 py-2">HSL</th>
            <th class="px-4 py-2">Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-2">Rosewater</td>
            <td class="px-4 py-2">#f2d5cf</td>
            <td class="px-4 py-2">rgb(242, 213, 207)</td>
            <td class="px-4 py-2">hsl(10, 57%, 88%)</td>
            <td class="px-4 py-2 bg-rosewater" />
          </tr>
          <tr>
            <td class="px-4 py-2">Flamingo</td>
            <td class="px-4 py-2">#eebebe</td>
            <td class="px-4 py-2">rgb(238, 190, 190)</td>
            <td class="px-4 py-2">hsl(0, 59%, 84%)</td>
            <td class="px-4 py-2 bg-flamingo" />
          </tr>
          <tr>
            <td class="px-4 py-2">Pink</td>
            <td class="px-4 py-2">#f4b8e4</td>
            <td class="px-4 py-2">rgb(244, 184, 228)</td>
            <td class="px-4 py-2">hsl(316, 73%, 84%)</td>
            <td class="px-4 py-2 bg-pink" />
          </tr>
          <tr>
            <td class="px-4 py-2">Mauve</td>
            <td class="px-4 py-2">#ca9ee6</td>
            <td class="px-4 py-2">rgb(202, 158, 230)</td>
            <td class="px-4 py-2">hsl(277, 59%, 76%)</td>
            <td class="px-4 py-2 bg-mauve" />
          </tr>
          <tr>
            <td class="px-4 py-2">Red</td>
            <td class="px-4 py-2">#e78284</td>
            <td class="px-4 py-2">rgb(231, 130, 132)</td>
            <td class="px-4 py-2">hsl(359, 68%, 71%)</td>
            <td class="px-4 py-2 bg-red" />
          </tr>
          <tr>
            <td class="px-4 py-2">Maroon</td>
            <td class="px-4 py-2">#ea999c</td>
            <td class="px-4 py-2">rgb(234, 153, 156)</td>
            <td class="px-4 py-2">hsl(358, 66%, 76%)</td>
            <td class="px-4 py-2 bg-maroon" />
          </tr>
          <tr>
            <td class="px-4 py-2">Peach</td>
            <td class="px-4 py-2">#ef9f76</td>
            <td class="px-4 py-2">rgb(239, 159, 118)</td>
            <td class="px-4 py-2">hsl(20, 79%, 70%)</td>
            <td class="px-4 py-2 bg-peach" />
          </tr>
          <tr>
            <td class="px-4 py-2">Yellow</td>
            <td class="px-4 py-2">#e5c890</td>
            <td class="px-4 py-2">rgb(229, 200, 144)</td>
            <td class="px-4 py-2">hsl(40, 62%, 73%)</td>
            <td class="px-4 py-2 bg-yellow" />
          </tr>
          <tr>
            <td class="px-4 py-2">Green</td>
            <td class="px-4 py-2">#a6d189</td>
            <td class="px-4 py-2">rgb(166, 209, 137)</td>
            <td class="px-4 py-2">hsl(96, 44%, 68%)</td>
            <td class="px-4 py-2 bg-green" />
          </tr>
          <tr>
            <td class="px-4 py-2">Teal</td>
            <td class="px-4 py-2">#81c8be</td>
            <td class="px-4 py-2">rgb(129, 200, 190)</td>
            <td class="px-4 py-2">hsl(172, 39%, 65%)</td>
            <td class="px-4 py-2 bg-teal" />
          </tr>
          <tr>
            <td class="px-4 py-2">Sky</td>
            <td class="px-4 py-2">#99d1db</td>
            <td class="px-4 py-2">rgb(153, 209, 219)</td>
            <td class="px-4 py-2">hsl(189, 48%, 73%)</td>
            <td class="px-4 py-2 bg-sky" />
          </tr>
          <tr>
            <td class="px-4 py-2">Sapphire</td>
            <td class="px-4 py-2">#85c1dc</td>
            <td class="px-4 py-2">rgb(133, 193, 220)</td>
            <td class="px-4 py-2">hsl(199, 55%, 69%)</td>
            <td class="px-4 py-2 bg-sapphire" />
          </tr>
          <tr>
            <td class="px-4 py-2">Blue</td>
            <td class="px-4 py-2">#8caaee</td>
            <td class="px-4 py-2">rgb(140, 170, 238)</td>
            <td class="px-4 py-2">hsl(222, 74%, 74%)</td>
            <td class="px-4 py-2 bg-blue" />
          </tr>
          <tr>
            <td class="px-4 py-2">Lavender</td>
            <td class="px-4 py-2">#babbf1</td>
            <td class="px-4 py-2">rgb(186, 187, 241)</td>
            <td class="px-4 py-2">hsl(239, 66%, 84%)</td>
            <td class="px-4 py-2 bg-lavender" />
          </tr>
          <tr>
            <td class="px-4 py-2">Text</td>
            <td class="px-4 py-2">#c6d0f5</td>
            <td class="px-4 py-2">rgb(198, 208, 245)</td>
            <td class="px-4 py-2">hsl(227, 70%, 87%)</td>
            <td class="px-4 py-2 bg-text" />
          </tr>
          <tr>
            <td class="px-4 py-2">Subtext1</td>
            <td class="px-4 py-2">#b5bfe2</td>
            <td class="px-4 py-2">rgb(181, 191, 226)</td>
            <td class="px-4 py-2">hsl(227, 44%, 80%)</td>
            <td class="px-4 py-2 bg-subtext1" />
          </tr>
          <tr>
            <td class="px-4 py-2">Subtext0</td>
            <td class="px-4 py-2">#a5adce</td>
            <td class="px-4 py-2">rgb(165, 173, 206)</td>
            <td class="px-4 py-2">hsl(228, 29%, 73%)</td>
            <td class="px-4 py-2 bg-subtext0" />
          </tr>
          <tr>
            <td class="px-4 py-2">Overlay2</td>
            <td class="px-4 py-2">#949cbb</td>
            <td class="px-4 py-2">rgb(148, 156, 187)</td>
            <td class="px-4 py-2">hsl(228, 22%, 66%)</td>
            <td class="px-4 py-2 bg-overlay2" />
          </tr>
          <tr>
            <td class="px-4 py-2">Overlay1</td>
            <td class="px-4 py-2">#838ba7</td>
            <td class="px-4 py-2">rgb(131, 139, 167)</td>
            <td class="px-4 py-2">hsl(227, 17%, 58%)</td>
            <td class="px-4 py-2 bg-overlay1" />
          </tr>
          <tr>
            <td class="px-4 py-2">Overlay0</td>
            <td class="px-4 py-2">#737994</td>
            <td class="px-4 py-2">rgb(115, 121, 148)</td>
            <td class="px-4 py-2">hsl(229, 13%, 52%)</td>
            <td class="px-4 py-2 bg-overlay0" />
          </tr>
          <tr>
            <td class="px-4 py-2">Surface2</td>
            <td class="px-4 py-2">#626880</td>
            <td class="px-4 py-2">rgb(98, 104, 128)</td>
            <td class="px-4 py-2">hsl(228, 13%, 44%)</td>
            <td class="px-4 py-2 bg-surface2" />
          </tr>
          <tr>
            <td class="px-4 py-2">Surface1</td>
            <td class="px-4 py-2">#51576d</td>
            <td class="px-4 py-2">rgb(81, 87, 109)</td>
            <td class="px-4 py-2">hsl(227, 15%, 37%)</td>
            <td class="px-4 py-2 bg-surface1" />
          </tr>
          <tr>
            <td class="px-4 py-2">Surface0</td>
            <td class="px-4 py-2">#414559</td>
            <td class="px-4 py-2">rgb(65, 69, 89)</td>
            <td class="px-4 py-2">hsl(230, 16%, 30%)</td>
            <td class="px-4 py-2 bg-surface0" />
          </tr>
          <tr>
            <td class="px-4 py-2">Base</td>
            <td class="px-4 py-2">#303446</td>
            <td class="px-4 py-2">rgb(48, 52, 70)</td>
            <td class="px-4 py-2">hsl(229, 19%, 23%)</td>
            <td class="px-4 py-2 bg-base" />
          </tr>
          <tr>
            <td class="px-4 py-2">Mantle</td>
            <td class="px-4 py-2">#292c3c</td>
            <td class="px-4 py-2">rgb(41, 44, 60)</td>
            <td class="px-4 py-2">hsl(231, 19%, 20%)</td>
            <td class="px-4 py-2 bg-mantle" />
          </tr>
          <tr>
            <td class="px-4 py-2">Crust</td>
            <td class="px-4 py-2">#232634</td>
            <td class="px-4 py-2">rgb(35, 38, 52)</td>
            <td class="px-4 py-2">hsl(229, 20%, 17%)</td>
            <td class="px-4 py-2 bg-crust" />
          </tr>
        </tbody>
      </table>
    </details>
    <details>
      <summary>Macchiato</summary>
      <table class="table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2">Labels</th>
            <th class="px-4 py-2">Hex</th>
            <th class="px-4 py-2">RGB</th>
            <th class="px-4 py-2">HSL</th>
            <th class="px-4 py-2">Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-2">Rosewater</td>
            <td class="px-4 py-2">#f4dbd6</td>
            <td class="px-4 py-2">rgb(244, 219, 214)</td>
            <td class="px-4 py-2">hsl(10, 58%, 90%)</td>
            <td class="px-4 py-2 bg-rosewater" />
          </tr>
          <tr>
            <td class="px-4 py-2">Flamingo</td>
            <td class="px-4 py-2">#f0c6c6</td>
            <td class="px-4 py-2">rgb(240, 198, 198)</td>
            <td class="px-4 py-2">hsl(0, 58%, 86%)</td>
            <td class="px-4 py-2 bg-flamingo" />
          </tr>
          <tr>
            <td class="px-4 py-2">Pink</td>
            <td class="px-4 py-2">#f5bde6</td>
            <td class="px-4 py-2">rgb(245, 189, 230)</td>
            <td class="px-4 py-2">hsl(316, 74%, 85%)</td>
            <td class="px-4 py-2 bg-pink" />
          </tr>
          <tr>
            <td class="px-4 py-2">Mauve</td>
            <td class="px-4 py-2">#c6a0f6</td>
            <td class="px-4 py-2">rgb(198, 160, 246)</td>
            <td class="px-4 py-2">hsl(267, 83%, 80%)</td>
            <td class="px-4 py-2 bg-mauve" />
          </tr>
          <tr>
            <td class="px-4 py-2">Red</td>
            <td class="px-4 py-2">#ed8796</td>
            <td class="px-4 py-2">rgb(237, 135, 150)</td>
            <td class="px-4 py-2">hsl(351, 74%, 73%)</td>
            <td class="px-4 py-2 bg-red" />
          </tr>
          <tr>
            <td class="px-4 py-2">Maroon</td>
            <td class="px-4 py-2">#ee99a0</td>
            <td class="px-4 py-2">rgb(238, 153, 160)</td>
            <td class="px-4 py-2">hsl(355, 71%, 77%)</td>
            <td class="px-4 py-2 bg-maroon" />
          </tr>
          <tr>
            <td class="px-4 py-2">Peach</td>
            <td class="px-4 py-2">#f5a97f</td>
            <td class="px-4 py-2">rgb(245, 169, 127)</td>
            <td class="px-4 py-2">hsl(21, 86%, 73%)</td>
            <td class="px-4 py-2 bg-peach" />
          </tr>
          <tr>
            <td class="px-4 py-2">Yellow</td>
            <td class="px-4 py-2">#eed49f</td>
            <td class="px-4 py-2">rgb(238, 212, 159)</td>
            <td class="px-4 py-2">hsl(40, 70%, 78%)</td>
            <td class="px-4 py-2 bg-yellow" />
          </tr>
          <tr>
            <td class="px-4 py-2">Green</td>
            <td class="px-4 py-2">#a6da95</td>
            <td class="px-4 py-2">rgb(166, 218, 149)</td>
            <td class="px-4 py-2">hsl(105, 48%, 72%)</td>
            <td class="px-4 py-2 bg-green" />
          </tr>
          <tr>
            <td class="px-4 py-2">Teal</td>
            <td class="px-4 py-2">#8bd5ca</td>
            <td class="px-4 py-2">rgb(139, 213, 202)</td>
            <td class="px-4 py-2">hsl(171, 47%, 69%)</td>
            <td class="px-4 py-2 bg-teal" />
          </tr>
          <tr>
            <td class="px-4 py-2">Sky</td>
            <td class="px-4 py-2">#91d7e3</td>
            <td class="px-4 py-2">rgb(145, 215, 227)</td>
            <td class="px-4 py-2">hsl(189, 59%, 73%)</td>
            <td class="px-4 py-2 bg-sky" />
          </tr>
          <tr>
            <td class="px-4 py-2">Sapphire</td>
            <td class="px-4 py-2">#7dc4e4</td>
            <td class="px-4 py-2">rgb(125, 196, 228)</td>
            <td class="px-4 py-2">hsl(199, 66%, 69%)</td>
            <td class="px-4 py-2 bg-sapphire" />
          </tr>
          <tr>
            <td class="px-4 py-2">Blue</td>
            <td class="px-4 py-2">#8aadf4</td>
            <td class="px-4 py-2">rgb(138, 173, 244)</td>
            <td class="px-4 py-2">hsl(220, 83%, 75%)</td>
            <td class="px-4 py-2 bg-blue" />
          </tr>
          <tr>
            <td class="px-4 py-2">Lavender</td>
            <td class="px-4 py-2">#b7bdf8</td>
            <td class="px-4 py-2">rgb(183, 189, 248)</td>
            <td class="px-4 py-2">hsl(234, 82%, 85%)</td>
            <td class="px-4 py-2 bg-lavender" />
          </tr>
          <tr>
            <td class="px-4 py-2">Text</td>
            <td class="px-4 py-2">#cad3f5</td>
            <td class="px-4 py-2">rgb(202, 211, 245)</td>
            <td class="px-4 py-2">hsl(227, 68%, 88%)</td>
            <td class="px-4 py-2 bg-text" />
          </tr>
          <tr>
            <td class="px-4 py-2">Subtext1</td>
            <td class="px-4 py-2">#b8c0e0</td>
            <td class="px-4 py-2">rgb(184, 192, 224)</td>
            <td class="px-4 py-2">hsl(228, 39%, 80%)</td>
            <td class="px-4 py-2 bg-subtext1" />
          </tr>
          <tr>
            <td class="px-4 py-2">Subtext0</td>
            <td class="px-4 py-2">#a5adcb</td>
            <td class="px-4 py-2">rgb(165, 173, 203)</td>
            <td class="px-4 py-2">hsl(227, 27%, 72%)</td>
            <td class="px-4 py-2 bg-subtext0" />
          </tr>
          <tr>
            <td class="px-4 py-2">Overlay2</td>
            <td class="px-4 py-2">#939ab7</td>
            <td class="px-4 py-2">rgb(147, 154, 183)</td>
            <td class="px-4 py-2">hsl(228, 20%, 65%)</td>
            <td class="px-4 py-2 bg-overlay2" />
          </tr>
          <tr>
            <td class="px-4 py-2">Overlay1</td>
            <td class="px-4 py-2">#7f849c</td>
            <td class="px-4 py-2">rgb(127, 132, 156)</td>
            <td class="px-4 py-2">hsl(230, 13%, 55%)</td>
            <td class="px-4 py-2 bg-overlay1" />
          </tr>
          <tr>
            <td class="px-4 py-2">Overlay0</td>
            <td class="px-4 py-2">#6e738d</td>
            <td class="px-4 py-2">rgb(110, 115, 141)</td>
            <td class="px-4 py-2">hsl(231, 11%, 47%)</td>
            <td class="px-4 py-2 bg-overlay0" />
          </tr>
          <tr>
            <td class="px-4 py-2">Surface2</td>
            <td class="px-4 py-2">#5b6078</td>
            <td class="px-4 py-2">rgb(91, 96, 120)</td>
            <td class="px-4 py-2">hsl(233, 12%, 39%)</td>
            <td class="px-4 py-2 bg-surface2" />
          </tr>
          <tr>
            <td class="px-4 py-2">Surface1</td>
            <td class="px-4 py-2">#494d64</td>
            <td class="px-4 py-2">rgb(73, 77, 100)</td>
            <td class="px-4 py-2">hsl(234, 13%, 31%)</td>
            <td class="px-4 py-2 bg-surface1" />
          </tr>
          <tr>
            <td class="px-4 py-2">Surface0</td>
            <td class="px-4 py-2">#363a4f</td>
            <td class="px-4 py-2">rgb(54, 58, 79)</td>
            <td class="px-4 py-2">hsl(230, 16%, 23%)</td>
            <td class="px-4 py-2 bg-surface0" />
          </tr>
          <tr>
            <td class="px-4 py-2">Base</td>
            <td class="px-4 py-2">#24273a</td>
            <td class="px-4 py-2">rgb(36, 39, 58)</td>
            <td class="px-4 py-2">hsl(232, 23%, 18%)</td>
            <td class="px-4 py-2 bg-base" />
          </tr>
          <tr>
            <td class="px-4 py-2">Mantle</td>
            <td class="px-4 py-2">#1e2030</td>
            <td class="px-4 py-2">rgb(30, 32, 48)</td>
            <td class="px-4 py-2">hsl(233, 23%, 15%)</td>
            <td class="px-4 py-2 bg-mantle" />
          </tr>
          <tr>
            <td class="px-4 py-2">Crust</td>
            <td class="px-4 py-2">#181926</td>
            <td class="px-4 py-2">rgb(24, 25, 38)</td>
            <td class="px-4 py-2">hsl(236, 23%, 12%)</td>
            <td class="px-4 py-2 bg-crust" />
          </tr>
        </tbody>
      </table>
    </details>
    <details>
      <summary>Mocha</summary>
      <table class="table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2">Labels</th>
            <th class="px-4 py-2">Hex</th>
            <th class="px-4 py-2">RGB</th>
            <th class="px-4 py-2">HSL</th>
            <th class="px-4 py-2">Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-2">Rosewater</td>
            <td class="px-4 py-2">#f5e0dc</td>
            <td class="px-4 py-2">rgb(245, 224, 220)</td>
            <td class="px-4 py-2">hsl(10, 56%, 91%)</td>
            <td class="px-4 py-2 bg-rosewater" />
          </tr>
          <tr>
            <td class="px-4 py-2">Flamingo</td>
            <td class="px-4 py-2">#f2cdcd</td>
            <td class="px-4 py-2">rgb(242, 205, 205)</td>
            <td class="px-4 py-2">hsl(0, 59%, 88%)</td>
            <td class="px-4 py-2 bg-flamingo" />
          </tr>
          <tr>
            <td class="px-4 py-2">Pink</td>
            <td class="px-4 py-2">#f5c2e7</td>
            <td class="px-4 py-2">rgb(245, 194, 231)</td>
            <td class="px-4 py-2">hsl(316, 72%, 86%)</td>
            <td class="px-4 py-2 bg-pink" />
          </tr>
          <tr>
            <td class="px-4 py-2">Mauve</td>
            <td class="px-4 py-2">#cba6f7</td>
            <td class="px-4 py-2">rgb(203, 166, 247)</td>
            <td class="px-4 py-2">hsl(267, 84%, 81%)</td>
            <td class="px-4 py-2 bg-mauve" />
          </tr>
          <tr>
            <td class="px-4 py-2">Red</td>
            <td class="px-4 py-2">#f38ba8</td>
            <td class="px-4 py-2">rgb(243, 139, 168)</td>
            <td class="px-4 py-2">hsl(343, 81%, 75%)</td>
            <td class="px-4 py-2 bg-red" />
          </tr>
          <tr>
            <td class="px-4 py-2">Maroon</td>
            <td class="px-4 py-2">#eba0ac</td>
            <td class="px-4 py-2">rgb(235, 160, 172)</td>
            <td class="px-4 py-2">hsl(350, 65%, 77%)</td>
            <td class="px-4 py-2 bg-maroon" />
          </tr>
          <tr>
            <td class="px-4 py-2">Peach</td>
            <td class="px-4 py-2">#fab387</td>
            <td class="px-4 py-2">rgb(250, 179, 135)</td>
            <td class="px-4 py-2">hsl(23, 92%, 75%)</td>
            <td class="px-4 py-2 bg-peach" />
          </tr>
          <tr>
            <td class="px-4 py-2">Yellow</td>
            <td class="px-4 py-2">#f9e2af</td>
            <td class="px-4 py-2">rgb(249, 226, 175)</td>
            <td class="px-4 py-2">hsl(41, 86%, 83%)</td>
            <td class="px-4 py-2 bg-yellow" />
          </tr>
          <tr>
            <td class="px-4 py-2">Green</td>
            <td class="px-4 py-2">#a6e3a1</td>
            <td class="px-4 py-2">rgb(166, 227, 161)</td>
            <td class="px-4 py-2">hsl(115, 48%, 72%)</td>
            <td class="px-4 py-2 bg-green" />
          </tr>
          <tr>
            <td class="px-4 py-2">Teal</td>
            <td class="px-4 py-2">#94e2d5</td>
            <td class="px-4 py-2">rgb(148, 226, 213)</td>
            <td class="px-4 py-2">hsl(170, 57%, 73%)</td>
            <td class="px-4 py-2 bg-teal" />
          </tr>
          <tr>
            <td class="px-4 py-2">Sky</td>
            <td class="px-4 py-2">#89dceb</td>
            <td class="px-4 py-2">rgb(137, 220, 235)</td>
            <td class="px-4 py-2">hsl(189, 71%, 73%)</td>
            <td class="px-4 py-2 bg-sky" />
          </tr>
          <tr>
            <td class="px-4 py-2">Sapphire</td>
            <td class="px-4 py-2">#74c7ec</td>
            <td class="px-4 py-2">rgb(116, 199, 236)</td>
            <td class="px-4 py-2">hsl(199, 76%, 69%)</td>
            <td class="px-4 py-2 bg-sapphire" />
          </tr>
          <tr>
            <td class="px-4 py-2">Blue</td>
            <td class="px-4 py-2">#89b4fa</td>
            <td class="px-4 py-2">rgb(137, 180, 250)</td>
            <td class="px-4 py-2">hsl(217, 92%, 76%)</td>
            <td class="px-4 py-2 bg-blue" />
          </tr>
          <tr>
            <td class="px-4 py-2">Lavender</td>
            <td class="px-4 py-2">#b4befe</td>
            <td class="px-4 py-2">rgb(180, 190, 254)</td>
            <td class="px-4 py-2">hsl(232, 97%, 85%)</td>
            <td class="px-4 py-2 bg-lavender" />
          </tr>
          <tr>
            <td class="px-4 py-2">Text</td>
            <td class="px-4 py-2">#cdd6f4</td>
            <td class="px-4 py-2">rgb(205, 214, 244)</td>
            <td class="px-4 py-2">hsl(226, 64%, 88%)</td>
            <td class="px-4 py-2 bg-text" />
          </tr>
          <tr>
            <td class="px-4 py-2">Subtext1</td>
            <td class="px-4 py-2">#bac2de</td>
            <td class="px-4 py-2">rgb(186, 194, 222)</td>
            <td class="px-4 py-2">hsl(227, 35%, 80%)</td>
            <td class="px-4 py-2 bg-subtext1" />
          </tr>
          <tr>
            <td class="px-4 py-2">Subtext0</td>
            <td class="px-4 py-2">#a6adc8</td>
            <td class="px-4 py-2">rgb(166, 173, 200)</td>
            <td class="px-4 py-2">hsl(228, 24%, 72%)</td>
            <td class="px-4 py-2 bg-subtext0" />
          </tr>
          <tr>
            <td class="px-4 py-2">Overlay2</td>
            <td class="px-4 py-2">#9399b2</td>
            <td class="px-4 py-2">rgb(147, 153, 178)</td>
            <td class="px-4 py-2">hsl(228, 17%, 64%)</td>
            <td class="px-4 py-2 bg-overlay2" />
          </tr>
          <tr>
            <td class="px-4 py-2">Overlay1</td>
            <td class="px-4 py-2">#7f849c</td>
            <td class="px-4 py-2">rgb(127, 132, 156)</td>
            <td class="px-4 py-2">hsl(230, 13%, 55%)</td>
            <td class="px-4 py-2 bg-overlay1" />
          </tr>
          <tr>
            <td class="px-4 py-2">Overlay0</td>
            <td class="px-4 py-2">#6c7086</td>
            <td class="px-4 py-2">rgb(108, 112, 134)</td>
            <td class="px-4 py-2">hsl(231, 11%, 47%)</td>
            <td class="px-4 py-2 bg-overlay0" />
          </tr>
          <tr>
            <td class="px-4 py-2">Surface2</td>
            <td class="px-4 py-2">#585b70</td>
            <td class="px-4 py-2">rgb(88, 91, 112)</td>
            <td class="px-4 py-2">hsl(233, 12%, 39%)</td>
            <td class="px-4 py-2 bg-surface2" />
          </tr>
          <tr>
            <td class="px-4 py-2">Surface1</td>
            <td class="px-4 py-2">#45475a</td>
            <td class="px-4 py-2">rgb(69, 71, 90)</td>
            <td class="px-4 py-2">hsl(234, 13%, 31%)</td>
            <td class="px-4 py-2 bg-surface1" />
          </tr>
          <tr>
            <td class="px-4 py-2">Surface0</td>
            <td class="px-4 py-2">#313244</td>
            <td class="px-4 py-2">rgb(49, 50, 68)</td>
            <td class="px-4 py-2">hsl(237, 16%, 23%)</td>
            <td class="px-4 py-2 bg-surface0" />
          </tr>
          <tr>
            <td class="px-4 py-2">Base</td>
            <td class="px-4 py-2">#1e1e2e</td>
            <td class="px-4 py-2">rgb(30, 30, 46)</td>
            <td class="px-4 py-2">hsl(240, 21%, 15%)</td>
            <td class="px-4 py-2 bg-base" />
          </tr>
          <tr>
            <td class="px-4 py-2">Mantle</td>
            <td class="px-4 py-2">#181825</td>
            <td class="px-4 py-2">rgb(24, 24, 37)</td>
            <td class="px-4 py-2">hsl(240, 21%, 12%)</td>
            <td class="px-4 py-2 bg-mantle" />
          </tr>
          <tr>
            <td class="px-4 py-2">Crust</td>
            <td class="px-4 py-2">#11111b</td>
            <td class="px-4 py-2">rgb(17, 17, 27)</td>
            <td class="px-4 py-2">hsl(240, 23%, 9%)</td>
            <td class="px-4 py-2 bg-crust" />
          </tr>
        </tbody>
      </table>
    </details>
  </section>
</Article>
