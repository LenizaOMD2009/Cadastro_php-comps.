/*document.addEventListener('DOMContentLoaded', () => {
  const tbody = document.getElementById('tabelaUsuarios');
  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  function validarCpfCnpj(valor) {
    const valorLimpo = valor.replace(/\D/g, '');
    if (valorLimpo.length === 11) return /^[0-9]{11}$/.test(valorLimpo);
    if (valorLimpo.length === 14) return /^[0-9]{14}$/.test(valorLimpo);
    return false;
  }

  function renderizarTabela() {
    tbody.innerHTML = '';
    if (usuarios.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="9" class="text-center text-muted">Nenhum usuário cadastrado 💭</td>
        </tr>`;
      return;
    }

    let html = '';
    usuarios.forEach((u, index) => {
      html += `
        <tr>
          <td>${index + 1}</td>
          <td>${u.nome}</td>
          <td>${u.sobrenome}</td>
          <td>${u.cpfCnpj ?? ''}</td>
          <td>${u.rg ?? ''}</td>
          <td>${u.email ?? ''}</td>
          <td>${u.celular ?? ''}</td>
          <td>${'*'.repeat(u.senha?.length || 0)}</td>
          <td>
            <button class="btn kitty-btn-outline btn-sm me-2 editar" data-index="${index}" data-bs-toggle="modal" data-bs-target="#editarModal">
              <i class="bi bi-pencil-fill"></i> Editar
            </button>
            <button class="btn kitty-btn-danger btn-sm excluir" data-index="${index}">
              <i class="bi bi-trash-fill"></i> Excluir
            </button>
          </td>
        </tr>`;
    });
    tbody.innerHTML = html;
  }

  renderizarTabela();

  tbody.addEventListener('click', (e) => {
    if (e.target.closest('.excluir')) {
      const index = e.target.closest('.excluir').dataset.index;
      if (confirm('Tem certeza que deseja excluir este usuário?')) {
        usuarios.splice(index, 1);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        renderizarTabela();
      }
    } else if (e.target.closest('.editar')) {
      const index = e.target.closest('.editar').dataset.index;
      const u = usuarios[index];
      document.getElementById('modalIndex').value = index;
      document.getElementById('modalNome').value = u.nome;
      document.getElementById('modalSobrenome').value = u.sobrenome;
      document.getElementById('modalCpfCnpj').value = u.cpfCnpj ?? '';
      document.getElementById('modalRg').value = u.rg ?? '';
      document.getElementById('modalEmail').value = u.email ?? '';
      document.getElementById('modalCelular').value = u.celular ?? '';
      document.getElementById('modalSenha').value = u.senha ?? '';
    }
  });

  document.getElementById('salvarEdicao').addEventListener('click', () => {
    const index = document.getElementById('modalIndex').value;
    const nome = document.getElementById('modalNome').value.trim();
    const sobrenome = document.getElementById('modalSobrenome').value.trim();
    const cpfCnpj = document.getElementById('modalCpfCnpj').value.trim();
    const rg = document.getElementById('modalRg').value.trim();
    const email = document.getElementById('modalEmail').value.trim();
    const celular = document.getElementById('modalCelular').value.trim();
    const senha = document.getElementById('modalSenha').value.trim();

    if (!validarCpfCnpj(cpfCnpj)) {
      alert('CPF/CNPJ inválido! Insira um CPF com 11 dígitos ou CNPJ com 14 dígitos.');
      return;
    }

    usuarios[index] = { nome, sobrenome, cpfCnpj, rg, email, celular, senha };
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    renderizarTabela();

    const editarModal = bootstrap.Modal.getInstance(document.getElementById('editarModal'));
    editarModal.hide();
  });
}); */

