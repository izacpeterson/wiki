<script>
  import CodeBlock from "$lib/CodeBlock.svelte";
  import Article from "$lib/Article.svelte";
</script>

<Article title="Common Linux Commands">
  <p class="mb-12">This is a collection of common Linux commands that I use on a regular basis.</p>
  <section class="mb-12">
    <h1 class="text-2xl font-bold mb-4">ls - List Directory Contents</h1>
    <p class="mb-4">The ls command lists the contents of a directory.</p>
    <CodeBlock code={[`$ ls`]} />
    <!-- options -->
    <h2 class="text-xl font-bold mb-4">Options</h2>
    <ul class="list-disc list-inside">
      <li class="mb-2"><span class="font-bold">-a</span> - Show hidden files</li>
      <li class="mb-2"><span class="font-bold">-l</span> - Show long listing format</li>
      <li class="mb-2"><span class="font-bold">-h</span> - Show human-readable file sizes</li>
      <li class="mb-2"><span class="font-bold">-r</span> - Reverse sort order</li>
      <li class="mb-2"><span class="font-bold">-S</span> - Sort by file size</li>
      <li class="mb-2"><span class="font-bold">-t</span> - Sort by modification time</li>
    </ul>
  </section>
  <section class="mb-12">
    <h1 class="text-2xl font-bold mb-4">cd - Change Directory</h1>
    <p class="mb-4">The cd command changes the current working directory.</p>
    <CodeBlock code={[`$ cd /path/to/directory`]} />
    <h2 class="text-xl font-bold mb-4">Options</h2>
    <ul class="list-disc list-inside">
      <li class="mb-2"><span class="font-bold">-</span> - Change to the previous directory</li>
      <li class="mb-2"><span class="font-bold">~</span> - Change to the home directory</li>
      <li class="mb-2"><span class="font-bold">.</span> - Change to the current directory</li>
      <li class="mb-2"><span class="font-bold">..</span> - Change to the parent directory</li>
    </ul>
  </section>
  <section class="mb-12">
    <h1 class="text-2xl font-bold mb-4">pwd - Print Working Directory</h1>
    <p class="mb-4">The pwd command prints the current working directory.</p>
    <CodeBlock code={[`$ pwd`]} />
  </section>
  <section class="mb-12">
    <h1 class="text-2xl font-bold mb-4">mkdir - Make Directory</h1>
    <p class="mb-4">The mkdir command creates a new directory.</p>
    <CodeBlock code={[`$ mkdir /path/to/directory`]} />
  </section>
  <section class="mb-12">
    <h1 class="text-2xl font-bold mb-4">rm - Remove</h1>
    <p class="mb-4">The rm command removes files and directories.</p>
    <CodeBlock code={[`$ rm /path/to/file`, `$ rm -r /path/to/directory`]} />
    <!-- options -->
    <h2 class="text-xl font-bold mb-4">Options</h2>
    <ul class="list-disc list-inside">
      <li class="mb-2"><span class="font-bold">-f</span> - Force removal of files without prompting for confirmation</li>
      <li class="mb-2"><span class="font-bold">-i</span> - Prompt for confirmation before removing files</li>
      <li class="mb-2"><span class="font-bold">-r</span> - Recursively remove directories and their contents</li>
      <li class="mb-2"><span class="font-bold">-v</span> - Print the name of each file before removing it</li>
    </ul>
  </section>
  <section class="mb-12">
    <h1 class="text-2xl font-bold mb-4">cp - Copy</h1>
    <p class="mb-4">The cp command copies files and directories.</p>
    <CodeBlock code={[`$ cp /path/to/file /path/to/destination`, `$ cp -r /path/to/directory /path/to/destination`]} />
    <!-- options -->
    <h2 class="text-xl font-bold mb-4">Options</h2>
  </section>
  <section class="mb-12">
    <h1 class="text-2xl font-bold mb-4">mv - Move</h1>
    <p class="mb-4">The mv command moves files and directories.</p>
    <CodeBlock code={[`$ mv /path/to/file /path/to/destination`, `$ mv /path/to/directory /path/to/destination`]} />
  </section>
  <section class="mb-12">
    <h1 class="text-2xl font-bold mb-4">cat - Concatenate</h1>
    <p class="mb-4">The cat command prints the contents of a file to the terminal.</p>
    <CodeBlock code={[`$ cat /path/to/file`]} />
  </section>
  <section class="mb-12">
    <h1 class="text-2xl font-bold mb-4">less - Less</h1>
    <p class="mb-4">The less command prints the contents of a file to the terminal, but it allows you to scroll through the file.</p>
    <CodeBlock code={[`$ less /path/to/file`]} />
  </section>
  <section class="mb-12">
    <h1 class="text-2xl font-bold mb-4">grep - Global Regular Expression Print</h1>
    <p class="mb-4">The grep command searches for a pattern in a file.</p>
    <CodeBlock code={[`$ grep pattern /path/to/file`]} />
  </section>
  <section class="mb-12">
    <h1 class="text-2xl font-bold mb-4">chmod - Change Mode</h1>
    <p class="mb-4">The chmod command changes the permissions of a file or directory.</p>
    <CodeBlock code={[`$ chmod 755 /path/to/file`]} />
  </section>
  <section class="mb-12">
    <h1 class="text-2xl font-bold mb-4">chown - Change Owner</h1>
    <p class="mb-4">The chown command changes the owner of a file or directory.</p>
    <CodeBlock code={[`$ chown user:group /path/to/file`]} />
  </section>
</Article>
